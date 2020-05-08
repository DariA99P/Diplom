const User = require('../models/usersInfo');
const Joi = require('joi');

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
  organizationId: Joi.string().required(),
  confirmationPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required(),
});

exports.registerUser = async(req, res, next) => {
  try {
    const result = Joi.validate(req.body, userSchema);
    if (result.error) {
      req.flash('error', 'Data entered is not valid. Please try again.');
      res.send({
        error: 'Data entered is not valid. Please try again',
      });
      return;
    }

    const user = await User.findOne({ email: result.value.email });
    if (user) {
      req.flash('error', 'Email is already in use.');
      res.send({
        error: 'Email is already in use.',
      });
      return;
    }

    const hash = await User.hashPassword(result.value.password);

    delete result.value.confirmationPassword;
    result.value.password = hash;
    result.value.dateOfBirth = '';
    result.value.experience = 0;
    result.value.subscribersIds = [];
    result.value.subscriptionsIds = [];
    result.value.avatarUrl = '';

    const newUser = await new User(result.value);
    await newUser.save();

    req.flash('success', 'Registration successfully, go ahead and login.');
    res.status(200).send({
      data: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async(req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send({
        error: 'User not found with email',
      });
      return;
    }
    const valid = await User.isValidPassword(
      req.body.password || '',
      user.password,
    );
    if (!valid) {
      res.send({
        error: 'Invalid Password',
      });
      return;
    }
    res.status(200).send({ id: user._id });
  } catch (error) {
    next(error);
  }
};
