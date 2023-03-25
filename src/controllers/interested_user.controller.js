const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const {interesedUserService}= require("../services")


const setInterestedUser = catchAsync(async (req, res) => {
    const user = await interesedUserService.createInterestedUser(req.body);
    res.status(httpStatus.CREATED).send(user);
  });



module.exports = {
    setInterestedUser,
};
