const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { createAboutUsValidation, updateAboutUsValidation } = require('../../validations/aboutUs.validation');
const { createAboutUs, updateAboutUs, getAboutUsDetails } = require('../../controllers/aboutUs.controller');

const router = express.Router();

router.route('/').post(validate(createAboutUsValidation), createAboutUs);

router.route('/:id').put(validate(updateAboutUsValidation), updateAboutUs);

router.route('/').get(getAboutUsDetails);

module.exports = router;
