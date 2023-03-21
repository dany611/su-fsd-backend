const httpStatus = require('http-status');
const { User, Event } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a NewsEvent
 * @param {Object} eventBody
 * @returns {Promise<User>}
 */
const createEvent = async (eventBody) => {
  return Event.create(eventBody);
};

const getEventListing = async () => {
  return Event.find();
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
  console.log('event', event);
  await event.remove();
  return event;
};

module.exports = {
  createEvent,
  deleteEventById,
  getEventListing
};
