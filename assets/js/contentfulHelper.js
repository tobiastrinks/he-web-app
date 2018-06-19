import axios from 'axios'

export default class ContentfulHelper {
  constructor() {
    this.accessToken = require('../credentials/contentful').token;
    this.spaceId = 's723by1y55ws';
    this.baseUrl = `https://cdn.contentful.com/spaces/${this.spaceId}/environments/master`;
    this.language = 'de-DE';
  }

  getByContentType(contentType) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.baseUrl}/entries?locale=${this.language}&content_type=${contentType}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }).then(res => resolve(res.data)).catch(reject)
    });
  }
}
