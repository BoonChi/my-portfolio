module.exports = {
  basePath: process.env.NODE_ENV_PROD === "true" ? "" : "/my-portfolio",
  assetPrefix: process.env.NODE_ENV_PROD === "true" ? "" : "/my-portfolio/", // assetPrefix requires the trailing slash
  webpack(config, options) {
    const { isServer, webpack } = options;
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\.spec\.(ts|tsx)$/,
      })
    ),
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: config.inlineImageLimit,
              fallback: require.resolve("file-loader"),
              publicPath: `${config.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
              name: "[name]-[hash].[ext]",
              esModule: config.esModule || false,
            },
          },
        ],
      });
    return config;
  },
};
