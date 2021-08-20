import defaults from './defaults.config';
import classes from './classes.config';
import compose from './src/compose';
import collect from './src/collect';
import transform from './src/transform';
import render from './src/render';

/**
 * TailwindCSS FL
 * 
 * @param {object} user
 * 
 * @param {function} addUtilities
 * @param {function} e
 * @param {function} theme
 * 
 * @return {closure}
 */
const plugin = require('tailwindcss/plugin');

export default plugin.withOptions(function(user = {}) {
  return ({ addUtilities, theme, e }) => {
    /**
     * Setup
     * 
     * @description shallow merge plugin config defaults with user config
     * 
     * @return {object}
     */
    const maps = { defaults, classes };
    const opts = user ? { ...maps.defaults, ...user } : maps.defaults;
    delete opts.theme;

    /**
     * Compose
     * 
     * @description compose 
     * 
     * @return {object}
     * {
     *   themeKey: {
     *     defaultRatio: Number,
     *     config: { key: Number or [] },
     *     ignore: [],
     *   },
     *   ...
     * }
     */
    const composeTheme = compose(maps, opts);
    const userTheme = user && user.hasOwnProperty('theme') ? user.theme : { };  

    const themeToCollect = composeTheme
      .set(maps.defaults.theme, userTheme)
      .addExtendRules()
      .mergeMaps()
      .addShorthandDefaultRatio()
      .addChainedConfigKeys()
      .addSpacingToSupportedKeys()
      .get();

    /**
     * Collect
     * 
     * @description
     * 
     * @return {object}
     * {
     *   themeKey: {
     *     render: { className: [props] },
     *     entries: { key: Number or [] },
     *    },
     *   ...
     * }
     */
    const collectUtility = collect(maps, opts);

    const collectToTransform = Object.entries(themeToCollect).reduce((result, [key, entry]) => {
      const values = collectUtility
      .set(entry)
      .addDefaultRatio()
      .addIgnore()
      .addConfig()
      .get(key, theme(key));

      // adding { themeKey: { render: { className: [props] }, entries: { key: Number or [] } } }
      result[key] = {
        classes: maps.classes[key], 
        values,
      };

      return result;
    }, {});

    /**
     * Transform
     * 
     * @description
     * 
     * @return {array}
     * [
     *    {
     *     className: String,
     *     props: []
     *     value: { min: String, max: String, screenMin: String, screenMax: String }
     *    },
     *   ...
     * ]
     */
    const transformUtility = transform(opts, theme, e);

    const transformToRender = Object.entries(collectToTransform).reduce((result, [themeKey, entry]) => {
      Object.entries(entry.classes).map(([className, props]) => {
        Object.entries(entry.values).map(([valueKey, value]) => {
          const addUtility = transformUtility
            .addDefaultValue(themeKey, valueKey)
            .addClassName(className, valueKey)
            .get(props, value);

          // pushing { className: String, props: [], value: { min: String, max: String, screenMin: String, screenMax: String } }
          result.push(addUtility);
        });
      });

      return result;
    }, []);

    /**
     * Render
     * 
     * @description
     * 
     * @return {array}
     * [ 
     *   { className: { prop: value } },
     *   ...
     * ]
     */
    const renderUtility = render(opts);

    const renderDeclarations = transformToRender.map(entry => {
      return renderUtility
        .set(entry)
        .addSizesRem()
        .addClamp()
        .addMediaQueries()
        .get()
    });

    renderDeclarations.map(declaration => addUtilities(declaration, opts.variants));
  }
})
