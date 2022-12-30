const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "pc",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader',
        },
      ],
    },  
  });
};
