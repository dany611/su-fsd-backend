const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const propertyValidation = require('../../validations/property.validation');
const propertyController = require('../../controllers/property.controller');

const router = express.Router();

router.route('/').post(auth(), validate(propertyValidation.createNewProperty), propertyController.createProperty);

router.route('/').get(validate(propertyValidation.findPropertyListing), propertyController.getProperties);

router.route('/:propertyId').get(validate(propertyValidation.getProperty), propertyController.getProperty);
router.route('/:propertyId').delete(validate(propertyValidation.deleteUser), propertyController.deleteProperty);

module.exports = router;
