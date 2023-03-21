const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const eventSchema = mongoose.Schema(
  {
    imageUrl: {
      type: 'String',
    },
    title: {
      type: 'String',
    },
    shortDescription: {
      type: 'String',
    },
    longDescription: {
      type: 'String',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
