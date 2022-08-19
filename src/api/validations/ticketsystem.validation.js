const Joi = require("joi");

module.exports = {
  // GET /v1/ticketsystem
  createTicket: {
    body: {
      ticket: Joi.string().max(512).required(),
      apiKey: Joi.string().min(6).max(128).required(),
    },
  },
};
