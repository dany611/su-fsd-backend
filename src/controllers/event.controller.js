const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { eventService } = require('../services');

const createEvent = catchAsync(async (req, res) => {
  const user = await eventService.createEvent(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getEventList = catchAsync(async (req, res) => {
  const event = await eventService.getEventListing();
  res.status(200).json({ event });
});

const getEventById = catchAsync(async (req, res) => {
  const event = await eventService.getEventById(req.params.eventId);
  res.status(200).json({ event });
});

const deleteEvent = catchAsync(async (req, res) => {
  await eventService.deleteEventById(req.params.eventId);
  res.status(200).json({ message: 'Event successfully deleted' });
});

const updateEvent = catchAsync(async (req, res) => {
  await eventService.updateEventById(req.params.eventId, req.body);
  res.status(200).json({ message: 'Event successfully updated' });
});

module.exports = {
  createEvent,
  deleteEvent,
  getEventList,
  updateEvent,
  getEventById,
};
