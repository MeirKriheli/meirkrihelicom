module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
        content: [
          './themes/**/*.html',
          './layouts/**/*.html',
          './content/**/*.html'
      ],
        safelist: [
          'alef',
          'welcome',
          'bg-solarized',
          'fg-solarized',
          'bg-alt-background',
          /^bx-/
      ],
    }
  }
};
