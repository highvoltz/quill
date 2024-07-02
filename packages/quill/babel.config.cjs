const pkg = require('./package.json');

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '51',
        },
      },
    ],
  ],
  plugins: [
    ['transform-define', { QUILL_VERSION: pkg.version }],
    './scripts/babel-svg-inline-import.cjs',
  ],
};
