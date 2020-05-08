const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationsSchema = new Schema(
  {
    nameOrganization: String,
    numberOfEmployees: Number,
    numberOfVacancies: Number,
    time: Number,
    typeOrganizationId: Number,
  },
  {
    collection: 'organizations',
  },
);

module.exports = mongoose.model('Organizations', organizationsSchema);
