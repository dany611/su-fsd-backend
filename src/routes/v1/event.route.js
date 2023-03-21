const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { createNewsEvent, deleteEventValidation } = require('../../validations/event.validation');
const { createEvent, deleteEvent, getEventList } = require('../../controllers/event.controller');

const router = express.Router();

router.route('/').post(validate(createNewsEvent), createEvent);

router.route('/').get(getEventList);

router.route('/:eventId').delete(validate(deleteEventValidation), deleteEvent);

module.exports = router;
