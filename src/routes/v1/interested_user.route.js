const express = require('express');
const {interestedUserController} = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(interestedUserController.setInterestedUser);


module.exports = router;

