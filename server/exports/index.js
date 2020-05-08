exports.transformFilesToIFiles = updateFiles => {
  return updateFiles
    ? updateFiles.map(i => ({
      idFile: i._id,
      fileName: i.fileName,
      idUser: i.idUser,
      creator: i.creator,
    }))
    : [];
};
