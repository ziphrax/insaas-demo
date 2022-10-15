const { override } = require("customize-cra");
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
  "default-src": "'self'",
  "base-uri": "'self'",
  "object-src": "'none'",
  "script-src": ["'self'"],
  "style-src": ["'self'"],
  "frame-ancestors": ["'self'", "'http://localhost:8080/'"],
};

function addCspHtmlWebpackPlugin(config) {
  if (process.env.NODE_ENV === "production") {
    config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
  }

  return config;
}

module.exports = {
  webpack: override(addCspHtmlWebpackPlugin),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      // Default config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
      const config = configFunction(proxy, allowedHost);

      // Set loose allow origin header to prevent CORS issues
      config.headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Security-Policy":
          "frame-src 'self' http://localhost:8080/; frame-ancestors 'self' http://localhost:8080/; object-src 'none';",
      };

      return config;
    };
  },
};
