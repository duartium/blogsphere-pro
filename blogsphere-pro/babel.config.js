module.exports = {
    presets: ['next/babel'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@components': './src/components',
          '@styles': './src/styles',
        },
      }],
    ],
  }
  