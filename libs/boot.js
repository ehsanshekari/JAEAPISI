// import https from 'https';
// import fs from 'fs';

module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    /* const credentials = {
      key: fs.readFileSync('jaeapisi.key', 'utf8'),
      cert: fs.readFileSync('jaeapisi.cert', 'utf8')
    }; */
    app.db.sequelize.sync().done(() => {
      app.listen(app.get('httpPort'), () => {
        console.log(`JAEAPISI (Just Another Express API Structure Implementation) - Port ${app.get('httpPort')}`);
      });
      /* https.createServer(credentials, app)
        .listen(app.get('httpsPort'), () => {
          console.log(`JAEAPISI (Just Another Express API Structure Implementation) - Port ${app.get('httpsPort')}`);
        }); */
    });
  }
};
