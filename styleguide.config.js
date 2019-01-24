module.exports = {
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: require("react-scripts/config/webpack.config"),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ""
    };
    return webpackConfig;
  }
};
// /Users/jast/futurice-nonda/james-styled-components-demo/node_modules/react-scripts/config/webpack.config.js

// /Users/jast/futurice-nonda/james-styled-components-demo/node_modules/react-scripts/config/webpackDevServer.config.js
