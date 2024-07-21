import Joi from '@hapi/joi';

export const signup = Joi.object().keys({
  user: Joi.alternatives()
    .try(
      Joi.string().email().trim().required().messages({
        'string.email': 'It must be a valid email address',
        'any.required': 'The field is required',
      }),
      Joi.string().min(10).max(15).trim().required().messages({
        'string.length': 'It must be at least 15 characters long',
        'any.required': 'The field is required',
      })
    ),
  password: Joi.string().min(1).max(30).trim().required(),
  confirmPassword: Joi.string().min(1).max(30).trim().required(),
});

export const validationSignup = (req, res, next) => {
  const { error } = signup.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
