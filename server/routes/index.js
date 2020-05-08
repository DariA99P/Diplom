const express = require('express');
const router = express.Router();
const networkController = require('../controllers/networkController');
const imagesController = require('../controllers/imagesController');
const organizationsController = require('../controllers/organizationsController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/process', networkController.processDrawing);

router.put('/save/:id', imagesController.saveNewImage);

router.put('/remove/:id', imagesController.removeImage);

router.get('/organizationsList', organizationsController.getOrganizationList);

module.exports = router;
