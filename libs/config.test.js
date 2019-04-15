module.exports = {
  database: 'ntask_test',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'jaeapisi.sqlite',
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: 'jaeapi$i-API',
  jwtSession: { session: false }
};
