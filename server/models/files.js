const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema(
  {
    fileName: String,
    fileSizeKB: Number,
    typeFile: String,
    idUser: String,
    dateOfCreation: String,
  },
  {
    collection: 'files',
  },
);

module.exports = mongoose.model('Files', filesSchema);
