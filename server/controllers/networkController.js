const writeJsonFile = require('write-json-file');
const data = require('../repository/trainData.json');

exports.processDrawing = function(req, res, next) {
  // const dataImageModel = {
  //   input: req.body,
  //   out: [0, 0, 1],
  // };
  // const newData = { images: [...data.images, dataImageModel] };
  (async () => {
    // await writeJsonFile('network/trainData.json', newData);
    await res.status(200).send('oval');
  })();
};
