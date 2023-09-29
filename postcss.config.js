export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              { autoprefixer: true, mergeIdents: true, discardUnused: true },
            ],
          },
        }
      : {}),
  },
};
