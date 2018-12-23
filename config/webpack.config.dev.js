console.log('grita');

module.exports = {
  plugins: [
    {
      test: /\.(js|jsx|mjs)$/,
      include: '.src',
      loader: require.resolve('babel-loader'),
      options: {
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src/App'],
              alias: {
                components: './src/componets',
              },
            },
          ],
        ],
        cacheDirectory: true,
      },
    },
  ],
};
