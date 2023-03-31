const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createAboutUsValidation = {
  body: Joi.object().keys({
    imageUrl: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const updateAboutUsValidation = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    imageUrl: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

module.exports = {
  createAboutUsValidation,
  updateAboutUsValidation,
};
