const httpStatus = require('http-status');
const { AboutUs } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a AboutUs
 * @param {Object} eventBody
 * @returns {Promise<AboutUs>}
 */
const createAboutUs = async (aboutUsBody) => {
  return AboutUs.create(aboutUsBody);
};

/**
 * Get about by id
 * @param {ObjectId} id
 * @returns {Promise<AboutUs>}
 */
const getAboutUs = async (id) => {
  return AboutUs.findById(id);
};

const getAboutUsDetails = async () => {
  return AboutUs.find();
};

/**
 * Update aboutUs by id
 * @param {ObjectId} id
 * @returns {Promise<AboutUs>}
 */
const updateAboutUsById = async (id, eventBody) => {
  const aboutUs = await getAboutUs(id);
  if (!aboutUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'AboutUs not found');
  }
  await AboutUs.updateOne(
    {
      _id: id,
    },
    {
      $set: eventBody,
    }
  );
};

module.exports = {
  createAboutUs,
  updateAboutUsById,
  getAboutUsDetails,
};
