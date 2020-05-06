const express = require('express');
const router = express.Router();
const networkController = require('../controllers/networkController');
const editorController = require('../controllers/editorController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/process', networkController.processDrawing);

router.put('/save:id', editorController.saveImageToDB);

module.exports = router;
