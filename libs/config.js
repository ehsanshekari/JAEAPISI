module.exports = app => {
  const env = process.env.NODE_ENV;
  // console.log('env is:', env);
  if (env) {
    return require(`./config.${env}.js`);
  }
  return require('./config.dev.js');
};
