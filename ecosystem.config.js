module.exports = {
  apps: [
    {
      script: 'build/index.js',
      name: 'TO_BE_CHANGED',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
