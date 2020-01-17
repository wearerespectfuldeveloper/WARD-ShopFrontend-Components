module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'javascript' },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  })
 
  return config;
};