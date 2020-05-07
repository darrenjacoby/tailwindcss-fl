import merge from 'deepmerge';
import { getArray } from './math';

export default (maps, opts) => {
  const store = {
    /*
    entry: {},
    map: {},
    */
  }

  return Object.freeze({
    /**
     * set
     * 
     * @description
     * 
     * @param {object} defaultTheme
     * @param {object} userTheme
     * 
     * @return {object}
     */
    set(defaults, user) {
     store.entry = { defaults, user };

      return this;
    },

    /**
     * addExtendRules
     * 
     * @description
     * 
     * @param {object} store.entry.defaults
     * @param {object} store.entry.user
     * 
     * @return {object}
     */
    addExtendRules() {
      store.entry.defaults = Object.entries(store.entry.defaults).reduce((result, [k, v]) => {
        const allowed = Array.isArray(opts.extend) && opts.extend.includes('spacing') ? 
          [ ...opts.extend, ...maps.classes.spacing ] :
          opts.extend;

        if (Array.isArray(allowed) && allowed.includes(k) || opts.extend === true) {
          result[k] = v;
        }

        return result;
      }, {});

      return this;
    },

    /**
     * mergeMaps
     * 
     * @description
     * 
     * @param  {...any} args 
     * 
     * @return {object}
     */
    mergeMaps() {
      // https://www.npmjs.com/package/deepmerge#custommerge
      const options = {
        /* eslint-disable-next-line */
        customMerge: k => {
          if (k === 'config') {
            return (configA, configB) => {
              return configB;
            };
          }
        }
      }

      store.map = merge(store.entry.defaults, store.entry.user, options);

      return this;
    },

    /**
     * addChainedConfigKeys
     * 
     * @description
     * 
     * @param {object} compose.store
     * 
     * @return {object}
     */
    addShorthandDefaultRatio() {
      store.map = Object.entries(store.map).reduce((result, [k, obj]) => {
        result[k] = isNaN(obj) ? obj : { defaultRatio: obj };
        return result;
      }, {});

      return this;
    },

    /**
     * addChainedConfigKeys
     * 
     * @description
     * 
     * @param {object} compose.store
     * 
     * @return {object}
     */
    addChainedConfigKeys() {
      store.map = Object.entries(store.map).reduce((result, [key, obj]) => {
        const getExpandedKeys = () => {
          const expandedKeys = Object.entries(obj.config).reduce((keys, [k, value]) => {
            getArray(k.split(' ')).map((i) => {
              keys[i] = value;
            });
      
            return keys;
          }, {});

          return { config: expandedKeys };
        }
      
        result[key] = obj.hasOwnProperty('config') ? {...obj, ...getExpandedKeys() } : obj;
      
        return result;
      }, {});

      return this;
    },

    /**
     * addSpacingToSupportedKeys
     * 
     * @description
     * 
     * @param {oject} compose.store
     * 
     * @return {object}
     */
    addSpacingToSupportedKeys() {
      store.map = Object.entries(store.map).reduce((result, [k, obj]) => {
        const value = store.map.hasOwnProperty('spacing') && maps.classes.spacing.includes(k) ?
          merge(store.map.spacing, obj) :
          obj;

        result[k] = value;
        return result;
      }, {});

      delete store.map.spacing;

      return this;
    },

    /**
     * get
     * 
     * @description
     * 
     * @param {oject} store.map
     * 
     * @return {object}
     */
    get() {
      return store.map;
    }
  });
}
