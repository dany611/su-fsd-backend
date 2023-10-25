const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { fileService } = require('../services');



const getFileList = catchAsync(async (req, res) => {
  const files = await fileService.getFileList(req.query.sortColumn,req.query.sortDirection);
  res.status(200).json({ files });
});

module.exports = {
    getFileList
};
