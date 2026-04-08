module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
          ],
        },
      },
    })

    config.resolve.extensions = [...(config.resolve.extensions || []), '.js', '.jsx']
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      module: false,
      os: false,
      fs: false,
      path: false,
    }
    return config
  },
}