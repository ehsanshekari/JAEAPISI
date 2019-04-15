import logger from './logger.js';

module.exports = {
  database: 'ntask',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'jaeapisi.sqlite',
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: 'jaeapi$i-API',
  jwtSession: { session: false }
};
