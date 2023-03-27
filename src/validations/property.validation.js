const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { propertySaleType, propertyTypes, propertyVisibleType } = require('../config/property');

const agentSchema = Joi.object({
  full_name: Joi.string(),
});

const amenitiesSchema = Joi.object({
  built: Joi.number(),
  plot: Joi.number(),
  beds: Joi.number(),
  baths: Joi.number(),
  year: Joi.date(),
  reference: Joi.string(),
  parking: Joi.number(),
  terrace: Joi.number(),
  new_build: Joi.number(),
  pool: Joi.number(),
});

const energyRatingSchema = Joi.object({
  consumption: Joi.string(),
  emissions: Joi.string(),
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
  name: Joi.string(),
  email: Joi.string(),
  surname: Joi.string(),
  phone_number: Joi.string(),
};

const createNewsProperty = {
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
    province: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
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
    desc: Joi.string(),
    video_url: Joi.string(),
    images: Joi.array().items(Joi.string()),
    documents: Joi.array().items(Joi.string()),
    catastral: Joi.string(),
    address: Joi.string(),
    postal_code: Joi.string(),
    owner: ownerSchema,
  }),
};

module.exports = {
  createNewsProperty,
};
