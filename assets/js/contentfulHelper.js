import { CONTENTFUL_DELIVERY_TOKEN } from '~/assets/config/externalApiConfig';

const contentful = require('contentful');

export default class ContentfulHelper {
  constructor () {
    this.language = 'de-DE';

    this.client = contentful.createClient({
      space: 's723by1y55ws',
      accessToken: CONTENTFUL_DELIVERY_TOKEN
    });
  }

  getByContentTypes (contentTypes) {
    return new Promise((resolve, reject) => {
      this.client.getEntries({
        'sys.contentType.sys.id[in]': contentTypes.join(',')
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
