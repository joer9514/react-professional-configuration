module.exports = {
  darkMode: 'class',
  important: 'html',
  content: [
    'index.html',
    './src/App.tsx',
    './src/components/**/*.{tsx,jsx,js,css,html}',
    './src/pages/**/components/**/*.{tsx,jsx,js,css,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
