const express = require('express');
const { getFileList } = require('../../controllers/file.controller');
const router = express.Router();


router.route('/').get(getFileList);

module.exports = router;
