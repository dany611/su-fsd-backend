const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createNewsEvent = {
  body: Joi.object().keys({
    imageUrl: Joi.string().required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().required(),
    longDescription: Joi.string().required(),
  }),
};

const deleteEventValidation = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

const updateEventValidation = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    imageUrl: Joi.string().required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().required(),
    longDescription: Joi.string().required(),
  }),
};

module.exports = {
  createNewsEvent,
  deleteEventValidation,
  updateEventValidation
};
