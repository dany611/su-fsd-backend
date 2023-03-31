const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const aboutUsSchema = mongoose.Schema(
  {
    imageUrl: {
      type: 'String',
    },
    content: {
      type: 'String',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
aboutUsSchema.plugin(toJSON);

/**
 * @typedef AboutUs
 */
const AboutUs = mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;
