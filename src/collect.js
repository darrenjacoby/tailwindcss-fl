export default (opts) => {
  const store = {
    /*
    entry: {},
    defaultRatio: String,
    ignore: [],
    config: {},
    */
  }

  return Object.freeze({
    /**
     * set
     * 
     * @param {object} entry
     * 
     * @return {object}
     */
    set(entry) {
      store.entry = entry;

      return this;
    },

    /**
     * addDefaultRatio
     * 
     * @param {object} store.entry
     * 
     * @return {object}
     */
    addDefaultRatio() {
      store.defaultRatio = store.entry.hasOwnProperty('defaultRatio') ? store.entry.defaultRatio : opts.defaultRatio;

      return this;
    },

    /**
     * addIgnore
     * 
     * @param {object} store.entry
     * 
     * @return {object}
     */
    addIgnore() {
      store.ignore = store.entry.hasOwnProperty('ignore') ? store.entry.ignore : [];

      return this;
    },

    /**
     * addConfig
     * 
     * @param {object} store.entry
     * 
     * @return {object}
     */
    addConfig() {
      store.config = store.entry.hasOwnProperty('config') ? store.entry.config : {};

      return this;
    },

    /**
     * getUtility
     * 
     * @param {object} themeEntryConfig
     * @param {object} store
     * 
     * @return {object}
     */
    get(themeEntryConfig) {
      return Object.entries({ ...themeEntryConfig, ...store.config }).reduce((keys, [k]) => {
        const value = store.config.hasOwnProperty(k) ? 
          store.config[k] : 
          store.defaultRatio;

        if (value && !store.ignore.includes(k)) {
          keys[k] = value;
        }
  
        return keys;
      }, {});
    },
  });
}
