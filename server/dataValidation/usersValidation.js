const Joi = require("joi");

const usersJoiSchema = Joi.object({
  fullName: Joi.string().required().max(30),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(20),
  password: Joi.string().min(5).max(30).required(),
});

module.exports = usersJoiSchema;
