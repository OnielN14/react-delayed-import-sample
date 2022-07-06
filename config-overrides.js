module.exports = (config, env) => {
  /**
   * Fix SVG dynamic import
   * https://github.com/webpack/webpack/discussions/15117#discussioncomment-1924353
   */
  delete config.module.rules[1].oneOf[2].issuer;

  return config;
};
