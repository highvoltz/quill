const pkg = require('./package.json');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          // Specify ES2016 as the target environment
          esmodules: false, // Set to false to not specifically target environments with ES Module support
          // You can specify a specific environment version that supports ES2016, e.g., browsers or Node.js versions
          //   browsers: ['last 2 versions', 'safari >= 10', 'ie 11'], // Example: targeting the last 2 versions of browsers, Safari 10+, and IE 11
          ie: '10', // Internet Explorer 10 does not support spread syntax
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['transform-define', { QUILL_VERSION: pkg.version }],
    './scripts/babel-svg-inline-import.cjs',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-optional-catch-binding',
    './scripts/babel-add-catch-argument.cjs',
  ],
};
