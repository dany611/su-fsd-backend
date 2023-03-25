const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { createNewsEvent, deleteEventValidation, updateEventValidation } = require('../../validations/event.validation');
const { createEvent, deleteEvent, getEventList, updateEvent } = require('../../controllers/event.controller');

const router = express.Router();

router.route('/').post(validate(createNewsEvent), createEvent);

router.route('/').get(getEventList);

router.route('/:eventId').delete(validate(deleteEventValidation), deleteEvent);

router.route('/:eventId').put(validate(updateEventValidation), updateEvent);

module.exports = router;
