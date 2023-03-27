const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { propertyService } = require('../services');

const data = require('../data/properties.json');

const createProperty = catchAsync(async (req, res) => {
  const property = await propertyService.createProperty(req.body, req.user);
  res.status(httpStatus.CREATED).send(property);
});

const getProperties = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  res.status(200).json({ property: data.property });
});

const getProperty = catchAsync(async (req, res) => {
  const property = data.property.find((item) => item.id == req.params.propertyId);
  res.status(200).json({ property });
});

module.exports = {
  createProperty,
  getProperties,
  getProperty,
};
