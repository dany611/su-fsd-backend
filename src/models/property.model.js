const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');
const { propertySaleType, propertyTypes, propertyVisibleType, propertySoldStatus } = require('../config/property');

/**
 * properties that will be mapped to our schema from the xml json defined here.
 * town --> city
 * location_detail --> street
 * surface_area.built --> amenities.built
 * surface_area.plot --> amenities.plot
 * beds --> amenities.bed
 * baths --> amenities.baths
 * new_building --> amenities.new_building
 * pool --> amenities.pool
 * price_freq (sale or month) --> sale_type (rent or sale)
 */

const propertySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    sale_type: {
      type: 'Number',
      enum: propertySaleType,
    },
    visible_type: {
      type: 'Number',
      enum: propertyVisibleType,
    },
    type: {
      type: 'Number',
      enum: propertyTypes,
    },
    sold_status: {
      type: 'Number',
      enum: propertySoldStatus,
    },
    country: {
      type: 'String',
    },
    province: {
      type: 'String',
    },
    city: {
      type: 'String',
    },
    street: {
      type: 'String',
    },
    location: {
      latitude: {
        type: 'Number',
      },
      longitude: {
        type: 'Number',
      },
    },
    agent: {
      full_name: {
        type: 'String',
      },
    },
    amenities: {
      built: {
        type: 'Number',
      },
      plot: {
        type: 'Number',
      },
      beds: {
        type: 'Number',
      },
      baths: {
        type: 'Number',
      },
      year: {
        type: 'String',
      },
      reference: {
        type: 'String',
      },
      parking: {
        type: 'Number',
      },
      terrace: {
        type: 'Number',
      },
      new_build: {
        type: 'Number',
      },
      pool: {
        type: 'Number',
      },
    },
    energy_rating: {
      consumption: {
        type: 'String',
      },
      emissions: {
        type: 'String',
      },
    },
    nota_simple: {
      ibi: {
        type: 'Number',
      },
      comunity: {
        type: 'Number',
      },
    },
    for_sale: {
      sale_price: {
        type: 'Number',
      },
      comission: {
        type: 'Number',
      },
      percentage: {
        type: 'Number',
      },
      net_price: {
        type: 'Number',
      },
      valuation: {
        type: 'Number',
      },
    },
    for_rent: {
      long_term: {
        type: 'Number',
      },
      short_term: {
        type: 'Number',
      },
      agency_fees: {
        type: 'Number',
      },
    },
    listing_agent: {
      price: {
        type: 'Number',
      },
      percentage: {
        type: 'Number',
      },
    },
    selling_agent: {
      price: {
        type: 'Number',
      },
      percentage: {
        type: 'Number',
      },
    },
    desc: {
      type: 'String',
    },
    video_url: {
      type: 'String',
    },
    images: {
      type: ['String'],
      default: [],
    },
    documents: {
      type: ['String'],
      default: [],
    },
    catastral: {
      type: 'String',
    },
    address: {
      type: 'String',
    },
    postal_code: {
      type: 'String',
    },
    owner: {
      name: {
        type: 'String',
      },
      email: {
        type: 'String',
      },
      surname: {
        type: 'String',
      },
      phone_number: {
        type: 'String',
      },
    },
    date: {
      type: 'Date',
    },
    ref: {
      type: 'Number',
    },
    price: {
      type: 'Number',
    },
    currency: {
      type: 'String',
    },
    part_ownership: {
      type: 'String',
    },
    leasehold: {
      type: 'Number',
    },
    url: {
      es: {
        type: 'String',
      },
    },
    features: {
      feature: {
        type: ['String'],
      },
    },
    notes: {
      type: 'String',
    },
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
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
