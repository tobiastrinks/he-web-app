import { defaultModules, pageModules } from '../config/storeConfig';
import ContentfulHelper from './contentfulHelper';

const contentfulHelper = new ContentfulHelper();

const isStateContentEmpty = (state) => ((!state.content || state.content === null || !state.content.loaded));

const getMissingDefaultModules = (store) => {
  return defaultModules.filter(defaultModule => {
    return isStateContentEmpty(store.state[defaultModule.storeName]);
  });
};

const getStoreNameFromPageModuleByContentType = (pageModule, contentType) => {
  // check page-module itself
  if (pageModule.contentType === contentType) {
    return pageModule.storeName;
  } else {
    // check page-modules and default-modules
    const modules = [
      ...pageModule.modules,
      ...defaultModules
    ];
    const module = modules.filter(module => (module.contentType === contentType))[0];
    return module.storeName;
  }
};

export const fetchPage = (page, store) => {
  const pageModule = pageModules[page];
  const storeName = pageModule.storeName;

  const missingModules = [
    ...getMissingDefaultModules(store),
    ...pageModule.modules
  ].filter((module, index, self) => {
    // distinct
    return self.indexOf(module) === index;
  });

  return new Promise((resolve, reject) => {
    if (pageModule.contentType && isStateContentEmpty(store.state[storeName])) {
      missingModules.push(pageModule);
    }
    contentfulHelper.getByContentTypesAndLocale(missingModules.map(item => item.contentType), store.state.locale)
      .then((contentResponse) => {
        for (let contentType in contentResponse) {
          const storeName = getStoreNameFromPageModuleByContentType(pageModule, contentType);
          store.commit(`${storeName}/setContent`, contentResponse[contentType]);
        }
        if (pageModule.storeDefaultsLoader) {
          pageModule.storeDefaultsLoader(store);
        }
        resolve();
      });
  });
};
