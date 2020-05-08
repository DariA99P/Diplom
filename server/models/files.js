const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

const filesSchema = new Schema(
  {
    fileName: String,
    fileSizeKB: Number,
    typeFile: String,
    idUser: ObjectId,
    dateOfCreation: Number,
    creator: String,
  },
  {
    collection: 'files',
  },
);

module.exports = mongoose.model('Files', filesSchema);
