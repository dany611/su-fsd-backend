const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const propertyController = require('../../controllers/property.controller');

const router = express.Router();

router
  .route('/')
  .get(propertyController.getProperties);

router
  .route('/:propertyId')
  .get(propertyController.getProperty)

module.exports = router;

