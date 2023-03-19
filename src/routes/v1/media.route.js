const express = require('express');
const router = express.Router();
var upload = require('../../common/upload');

/**
 *
 * @api {[get]} media/
 * @apiName Upload Media
 * @apiGroup Media
 *
 *
 */
router.route('/').post((req, res) => {
  upload.upload(req, res, (err) => {
    if (err) {
        console.log("Error",err)
      res.status(400).send('Something went wrong!');
    }
    res.send(req.file);
  });
});

module.exports = router;
