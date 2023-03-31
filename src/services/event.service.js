const httpStatus = require('http-status');
const { User, Event } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a NewsEvent
 * @param {Object} eventBody
 * @returns {Promise<Event>}
 */
const createEvent = async (eventBody) => {
  return Event.create(eventBody);
};

const getEventListing = async () => {
  return Event.find().sort({ createdAt: -1 });
};

/**
 * Get event by id
 * @param {ObjectId} id
 * @returns {Promise<Event>}
 */
const getEventById = async (id) => {
  return Event.findById(id);
};

/**
 * Delete event by id
 * @param {ObjectId} eventId
 * @returns {Promise<Event>}
 */
const deleteEventById = async (eventId) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  await event.remove();
  return event;
};

/**
 * Update event by id
 * @param {ObjectId} eventId
 * @returns {Promise<Event>}
 */
const updateEventById = async (eventId, eventBody) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  await Event.updateOne(
    {
      _id: eventId,
    },
    {
      $set: eventBody,
    }
  );
};

module.exports = {
  createEvent,
  deleteEventById,
  getEventListing,
  updateEventById,
};
