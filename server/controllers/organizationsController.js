const Organizations = require('../models/organizations');

exports.getOrganizationList = async (req, res, next) => {
  try {
    const list = await Organizations.find();
    const updateList = list.map(item => ({
      id: item._id,
      nameOrganization: item.nameOrganization,
    }));
    res.status(200).send(updateList);
  } catch (error) {
    next(error);
    res.status(404).send({
      error,
    });
  }
};
