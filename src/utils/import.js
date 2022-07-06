/**
 * Delay Component lazy Import for milliseconds
 */
const delayedComponentImport = (componentName, delay = 2000) =>
  new Promise((r) => {
    setTimeout(() => {
      /**
       * Webpack import limitation
       * https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import:~:text=The%20import()%20must%20contain%20at%20least%20some%20information%20about%20where%20the%20module%20is%20located
       */
      r(import(`../components/${componentName}`));
    }, delay);
  });

/**
 * Delay Svg lazy import for milliseconds
 */
const delayedSvgImport = (name, delay = 2000) =>
  new Promise((r) => {
    setTimeout(() => {
      r(
        /**
         * Webpack import limitation
         * https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import:~:text=The%20import()%20must%20contain%20at%20least%20some%20information%20about%20where%20the%20module%20is%20located
         *
         * `!!@svgr/webpack?-svgo,+titleProp,+ref!` to import svg as default
         * https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
         */
        import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/icons/${name}.svg`
        )
      );
    }, delay);
  });

export { delayedComponentImport, delayedSvgImport };
