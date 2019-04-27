const contentful = require('contentful');
const axios = require('axios');
const fs = require('fs');

module.exports = class ContentfulHelper {
  constructor () {
    this.cfBackupDir = './cf_backup';
    if (!process.client) {
      this.client = contentful.createClient({
        space: 's723by1y55ws',
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || 'bc2803f81a91e210314097a8286e07ff02bed1bd6467df0e631de6b0be9ff6e7'
      });
      if (!fs.existsSync(this.cfBackupDir)) {
        fs.mkdirSync(this.cfBackupDir);
      }
    }
  }

  getByContentTypesAndLocale (contentTypes, locale) {
    const contentfulLocale = this.mapLocaleToContentfulLocale(locale);

    if (process.client) {
      return this.callServerSideToFetchFromCf(contentTypes, locale);
    }

    // server-side only
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
          ));
        });
        resolve(result);
        this.writeCfBackup(locale, result);
      }).catch(() => {
        resolve(this.fallBackToCfBackup(contentTypes, locale));
      });
    });
  }

  callServerSideToFetchFromCf (contentTypes, locale) {
    return new Promise((resolve, reject) => {
      axios.get('/cf', {
        params: {
          contentTypes: contentTypes.join(','),
          locale
        }
      }).then(res => resolve(res.data)).catch(reject);
    });
  }

  writeCfBackup (locale, content) {
    for (const key in content) {
      const dir = `${this.cfBackupDir}/${locale}`;
      const file = `${key}.json`;
      const filePath = `${dir}/${file}`;
      const data = JSON.stringify(content[key]);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      fs.stat(filePath, (err, stats) => {
        if (err) {
          fs.writeFile(filePath, data, () => {});
          return;
        }
        const lastUpdatedAt = new Date(stats.mtime);
        if ((new Date() - lastUpdatedAt) > 60 * 60 * 1000) {
          fs.writeFile(filePath, data, () => {});
        }
      });
    }
  }

  fallBackToCfBackup (contentTypes, locale) {
    const result = {};

    for (let x = 0; x < contentTypes.length; x++) {
      const contentType = contentTypes[x];
      const filePath = `${this.cfBackupDir}/${locale}/${contentType}.json`;
      if (fs.existsSync(filePath)) {
        console.warn(`fallBackToBackup for ${contentType}`);
        const data = fs.readFileSync(filePath, 'utf8');
        result[contentType] = JSON.parse(data);
      } else {
        console.error(`fallBackToBackup failed for ${contentType}`);
      }
    }

    return result;
  }

  mapLocaleToContentfulLocale (locale) {
    const map = {
      de: 'de-DE',
      en: 'en'
    };

    return map[locale];
  }
};
