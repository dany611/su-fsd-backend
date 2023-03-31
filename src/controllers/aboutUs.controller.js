const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { aboutUsService } = require('../services');

const createAboutUs = catchAsync(async (req, res) => {
  const user = await aboutUsService.createAboutUs(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const updateAboutUs = catchAsync(async (req, res) => {
  await aboutUsService.updateAboutUsById(req.params.id, req.body);
  res.status(200).json({ message: 'AboutUs successfully updated' });
});

const getAboutUsDetails = catchAsync(async (req, res) => {
  let aboutUs = await aboutUsService.getAboutUsDetails();
  res.status(200).json({ aboutUs });
});

module.exports = {
  createAboutUs,
  updateAboutUs,
  getAboutUsDetails,
};
