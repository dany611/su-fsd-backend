const httpStatus = require('http-status');
const { Property } = require('../models');
const ApiError = require('../utils/ApiError');

const createProperty = async (eventBody, currentUser) => {
  const property = new Property(eventBody);
  property.user = currentUser;
  return property.save();
};

module.exports = {
  createProperty,
};
