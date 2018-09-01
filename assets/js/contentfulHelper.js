const contentful = require('contentful');

export default class ContentfulHelper {
  constructor () {
    this.client = contentful.createClient({
      space: 's723by1y55ws',
      accessToken: process.env.contentfulDeliveryToken
    });
  }

  mapLocaleToContentfulLocale (locale) {
    const map = {
      de: 'de-DE',
      en: 'en'
    };

    return map[locale];
  }

  getByContentTypesAndLocale (contentTypes, locale) {
    const contentfulLocale = this.mapLocaleToContentfulLocale(locale);

    return new Promise((resolve, reject) => {
      this.client.getEntries({
        'sys.contentType.sys.id[in]': contentTypes.join(','),
        'locale': contentfulLocale
      }).then((entries) => {
        const result = {};
        contentTypes.forEach(contentType => {
          result[contentType] = entries.items.filter(item => (
            item.sys.contentType.sys.id === contentType
          )).map(item => (
            item.fields
          ))[0];
        });
        resolve(result);
      }).catch(reject);
    });
  }
}
