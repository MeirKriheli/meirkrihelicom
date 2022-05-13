module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
        content: [
          './themes/**/*.html',
          './layouts/**/*.html',
          './content/**/*.html'
      ],
      safelist: ['alef', 'bg-solarized', 'fg-solarized', 'bg-alt-background', /^bx-/],
    }
  }
};
