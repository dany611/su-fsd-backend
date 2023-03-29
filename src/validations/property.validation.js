const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { propertySaleType, propertyTypes, propertyVisibleType } = require('../config/property');

const agentSchema = Joi.object({
  full_name: Joi.string().allow(''),
});

const amenitiesSchema = Joi.object({
  built: Joi.number(),
  plot: Joi.number(),
  beds: Joi.number(),
  baths: Joi.number(),
  year: Joi.string().allow('').max(4),
  reference: Joi.string().allow(''),
  parking: Joi.number(),
  terrace: Joi.number(),
  new_build: Joi.number(),
  pool: Joi.number(),
});

const energyRatingSchema = Joi.object({
  consumption: Joi.string().allow(''),
  emissions: Joi.string().allow(''),
});

const notaSimpleSchema = Joi.object({
  ibi: Joi.number(),
  comunity: Joi.number(),
});

const forSaleSchema = Joi.object({
  sale_price: Joi.number(),
  comission: Joi.number(),
  percentage: Joi.number(),
  net_price: Joi.number(),
  valuation: Joi.number(),
});

const forRentSchema = Joi.object({
  long_term: Joi.number(),
  short_term: Joi.number(),
  agency_fees: Joi.number(),
});

const listingAgentSchema = {
  price: Joi.number(),
  percentage: Joi.number(),
};

const ownerSchema = {
  name: Joi.string().allow(''),
  email: Joi.string().allow(''),
  surname: Joi.string().allow(''),
  phone_number: Joi.string().allow(''),
};

const createNewProperty = {
  body: Joi.object().keys({
    sale_type: Joi.number()
      .required()
      .valid(...Object.values(propertySaleType)),
    visible_type: Joi.number()
      .required()
      .valid(...Object.values(propertyVisibleType)),
    type: Joi.number()
      .required()
      .valid(...Object.values(propertyTypes)),
    country: Joi.string().allow(''),
    province: Joi.string().allow(''),
    city: Joi.string().allow(''),
    street: Joi.string().allow(''),
    latitude: Joi.number().min(-90).max(90),
    longitude: Joi.number().min(-180).max(180),
    agent: agentSchema,
    amenities: amenitiesSchema,
    energy_rating: energyRatingSchema,
    nota_simple: notaSimpleSchema,
    for_sale: forSaleSchema,
    for_rent: forRentSchema,
    listing_agent: listingAgentSchema,
    selling_agent: listingAgentSchema,
    desc: Joi.string().allow(''),
    video_url: Joi.string().allow(''),
    images: Joi.array().items(Joi.string().allow('')),
    documents: Joi.array().items(Joi.string().allow('')),
    catastral: Joi.string().allow(''),
    address: Joi.string().allow(''),
    postal_code: Joi.string().allow(''),
    owner: ownerSchema,
  }),
};

const updateProperty = {
  params: Joi.object().keys({
    propertyId: Joi.string().allow('').custom(objectId),
  }),
  body: Joi.object().keys({
    sale_type: Joi.number()
      .required()
      .valid(...Object.values(propertySaleType)),
    visible_type: Joi.number()
      .required()
      .valid(...Object.values(propertyVisibleType)),
    type: Joi.number()
      .required()
      .valid(...Object.values(propertyTypes)),
    country: Joi.string().allow(''),
    province: Joi.string().allow(''),
    city: Joi.string().allow(''),
    street: Joi.string().allow(''),
    latitude: Joi.number().min(-90).max(90),
    longitude: Joi.number().min(-180).max(180),
    agent: agentSchema,
    amenities: amenitiesSchema,
    energy_rating: energyRatingSchema,
    nota_simple: notaSimpleSchema,
    for_sale: forSaleSchema,
    for_rent: forRentSchema,
    listing_agent: listingAgentSchema,
    selling_agent: listingAgentSchema,
    desc: Joi.string().allow(''),
    video_url: Joi.string().allow(''),
    images: Joi.array().items(Joi.string().allow('')),
    documents: Joi.array().items(Joi.string().allow('')),
    catastral: Joi.string().allow(''),
    address: Joi.string().allow(''),
    postal_code: Joi.string().allow(''),
    owner: ownerSchema,
  }),
};

const findPropertyListing = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    sale_type: Joi.number().valid(...Object.values(propertySaleType)),
    visible_type: Joi.number().valid(...Object.values(propertyVisibleType)),
    type: Joi.number().valid(...Object.values(propertyTypes)),
    country: Joi.string().allow(''),
    reference: Joi.string().allow(''),
    min_price: Joi.number(),
    max_price: Joi.number(),
    bedrooms: Joi.number(),
  }),
};

const getProperty = {
  params: Joi.object().keys({
    propertyId: Joi.string().allow('').custom(objectId),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    propertyId: Joi.string().allow('').custom(objectId),
  }),
};

module.exports = {
  createNewProperty,
  findPropertyListing,
  getProperty,
  deleteUser,
  updateProperty,
};
