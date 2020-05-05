import { getNumber, getUnitRem } from './math';

export default (opts) => {
  const store = {
    /*
    entry: {},
    sizes: {},
    clamp: String,
    mediaQueries: String,
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
     * addSizesRem
     * 
     * @param {object} entry
     * 
     * @return {object}
     */
    addSizesRem() {
      store.sizes = Object.assign({}, ...Object.entries(store.entry.value).map(([k, v]) => ({ [k]: getUnitRem(v, opts.rootRem) })));
      
      return this;
    },

    /**
     * addClamp
     * 
     * @param {object} entry
     * 
     * @return {object}
     */
    addClamp() {
      const props = store.entry.props.reduce((result, prop) => {
        result[prop] = `clamp(${store.sizes.min}, ${store.sizes.min} + (${getNumber(store.sizes.max)} - ${getNumber(store.sizes.min)}) * ((100vw - ${store.sizes.screenMin}) / (${getNumber(store.sizes.screenMax)} - ${getNumber(store.sizes.screenMin)})), ${store.sizes.max})`;
        return result;
      }, {});

      store.clamp = { [store.entry.className]: props };

      return this;
    },

    /**
     * addMediaQueries
     * 
     * @param {object} entry
     * 
     * @return {object}
     */
    addMediaQueries() {
      const propsMin = store.entry.props.reduce((result, prop) => {
        result[prop] = store.sizes.min;
        return result;
      }, {});
  
      const propsCalc = store.entry.props.reduce((result, prop) => {
        result[prop] = `calc(${store.sizes.min} + (${getNumber(store.sizes.max)} - ${getNumber(store.sizes.min)}) * ((100vw - ${store.sizes.screenMin}) / (${getNumber(store.sizes.screenMax)} - ${getNumber(store.sizes.screenMin)})))`;
        return result;
      }, {});
  
      const propsMax = store.entry.props.reduce((result, prop) => {
        result[prop] = store.sizes.max;
        return result;
      }, {});
  
      store.mediaQueries = {
        [store.entry.className]: propsMin,
        [`@media (min-width: ${store.sizes.screenMin})`]: {
          [store.entry.className]: propsCalc,
        },
        [`@media (min-width: ${store.sizes.screenMax})`]: {
          [store.entry.className]: propsMax,
        },
      };

      return this;
    },

    get() {
      const valid = [
        store.sizes.min,
        store.sizes.max,
        store.sizes.screenMin,
        store.sizes.screenMax].map((x) => {
        return Object.prototype.toString.call(x) === '[object String]' && x.includes('rem');
      }, {});

      if (!valid.includes(false)) {
        return opts.modernBrowsersOnly && getNumber(store.sizes.min) <= getNumber(store.sizes.max) ? 
          store.clamp : 
          store.mediaQueries;
      }
    }
  });
}
