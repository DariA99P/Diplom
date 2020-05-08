const Files = require('../models/files');
const commonExports = require('../exports/index');

exports.saveNewImage = async(req, res, next) => {
  try {
    const newFile = {
      fileName: req.body.fileName,
      fileSizeKB: 100,
      typeFile: 'img',
      idUser: req.params.id,
      dateOfCreation: req.body.dateOfCreation,
      creator: req.body.creator,
    };
    const files = await new Files(newFile);
    await files.save();

    const updateFiles = await Files.find({ idUser: req.params.id });
    const filesById = commonExports.transformFilesToIFiles(updateFiles);
    res.status(200).send(filesById);
  } catch (error) {
    next(error);
    res.status(404).send({
      error,
    });
  }
};

exports.removeImage = async (req, res, next) => {
  try {
    await Files.findOneAndDelete({ _id: req.params.id });
    const updateFiles = await Files.find({ idUser: req.body.idUser });
    const filesById = commonExports.transformFilesToIFiles(updateFiles);
    res.status(200).send(filesById);
  } catch (error) {
    next(error);
    res.status(404).send({
      error,
    });
  }
};
