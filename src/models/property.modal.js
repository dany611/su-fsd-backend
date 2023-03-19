const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const propertySchema = mongoose.Schema(
  {

    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
        "date": {
          "type": "Date"
        },
        "ref": {
          "type": "Number"
        },
        "price": {
          "type": "Number"
        },
        "currency": {
          "type": "String"
        },
        "price_freq": {
          "type": "String"
        },
        "part_ownership": {
          "type": "String"
        },
        "leasehold": {
          "type": "Number"
        },
        "new_build": {
          "type": "Number"
        },
        "type": {
          "type": "String"
        },
        "town": {
          "type": "String"
        },
        "province": {
          "type": "String"
        },
        "country": {
          "type": "String"
        },
        "location": {
          "latitude": {
            "type": "Number"
          },
          "longitude": {
            "type": "Number"
          }
        },
        "location_detail": {
          "type": "String"
        },
        "beds": {
          "type": "Number"
        },
        "baths": {
          "type": "Number"
        },
        "pool": {
          "type": "Number"
        },
        "surface_area": {
          "built": {
            "type": "Number"
          },
          "plot": {
            "type": "Number"
          }
        },
        "energy_rating": {
          "consumption": {
            "type": "String"
          },
          "emissions": {
            "type": "String"
          }
        },
        "url": {
          "es": {
            "type": "Date"
          }
        },
        "video_url": {
          "type": "String"
        },
        "catastral": {
          "type": "String"
        },
        "desc": {
          "es": {
            "type": "String"
          },
          "ca": {
            "type": "String"
          },
          "en": {
            "type": "String"
          },
          "fr": {
            "type": "String"
          }
        },
        "features": {
          "feature": {
            "type": [
              "String"
            ]
          }
        },
        "notes": {
          "type": "String"
        },
        "images": {
          "image": {
            "type": [
              "Mixed"
            ]
          }
        }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
propertySchema.plugin(toJSON);

/**
 * @typedef Property
 */
const Property = mongoose.model('Property', propertySchemas);

module.exports = Property;
