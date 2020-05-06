const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    email: String,
    username: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    password: String,
    organizationId: Number,
  },
  {
    collection: 'usersInfo',
  },
);

module.exports = mongoose.model('User', userSchema);

module.exports.hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Hashing failed', error);
  }
};
module.exports.isValidPassword = async (password, userPassword) => {
  try {
    return await bcrypt.compare(password, userPassword);
  } catch (error) {
    throw new Error('Verification failed', error);
  }
};
