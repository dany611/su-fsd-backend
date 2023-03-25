const httpStatus = require('http-status');
const { InterestedUser } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a NewsEvent
 * @param {Object} eventBody
 * @returns {Promise<User>}
 */
const createInterestedUser = async (eventBody) => {
  return InterestedUser.create(eventBody);
};

module.exports = {
    createInterestedUser
};
