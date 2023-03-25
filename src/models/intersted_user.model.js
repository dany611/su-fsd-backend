const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const interestedUserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
        type: String,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
      propertyValue: {
        type: String,
        trim: true,
      },
      bedrooms: {
        type: String,
        trim: true,
      },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
interestedUserSchema.plugin(toJSON);
interestedUserSchema.plugin(paginate);


/**
 * @typedef User
 */
const InterestedUser = mongoose.model('interested_users', interestedUserSchema);

module.exports = InterestedUser;
