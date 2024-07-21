import Joi from '@hapi/joi';
export const signin = Joi.object().keys({
  user: Joi.alternatives()
  .try(
    Joi.string().email().trim().required().messages({
      'string.email': 'It must be a valid email address',
      'any.required': 'The field is required',
    }),
    Joi.string().length(15).trim().required().messages({
      'string.length': 'It must at least 12 digits long',
      'any.required': 'The field is required',
    })
  ),
  password: Joi.string().trim().required(),
});
export const validateSignin = (req, res, next) => {
  const { error } = signin.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};