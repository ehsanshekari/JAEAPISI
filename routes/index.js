/**
 * @api {get} / API Status
 * @apiGroup Status
 * @apiSuccess {String} status API Status' message
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {"status": "JAEAPISI (Just Another Express API Structure Implementation)"}
 */
module.exports = app => {
  app.get('/', (req, res) => {
    res.json({ status: 'JAEAPISI (Just Another Express API Structure Implementation)' });
  });
};
