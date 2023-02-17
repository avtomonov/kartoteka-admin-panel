module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['_app.js']) {
        entries['_app.js'].unshift('./src/polyfills.js'); 
      }
      return entries;
    };

    return config;
  }

};
