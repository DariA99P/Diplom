const User = require('../models/usersInfo');
const Files = require('../models/files');

const commonExports = require('../exports/index');

exports.getUserInfoById = async(req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      res.send({
        error: 'User not found',
      });
      return;
    }
    const files = await Files.find({ idUser: user._id });
    const filesById = commonExports.transformFilesToIFiles(files);
    const userInfo = {
      id: user._id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      organizationId: user.organizationId,
      files: filesById,
      dateOfBirth: null,
      experience: null,
      subscribersIds: [],
      subscriptionsIds: [],
      avatarUrl: null,
    };
    const users = await User.find();
    const listUsers = users.map(item => ({
      id: item._id,
      allName: `${item.firstName} ${item.lastName}`,
      email: item.email,
    }));
    res.status(200).send({
      user: userInfo,
      listUsers,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async(req, res, next) => {
  try {
    const users = await User.find();
    const listUser = users.map(item => ({
      id: item._id,
      allName: `${item.firstName} ${item.lastName}`,
      email: item.email,
    }));
    res.status(200).send(listUser);
  } catch (error) {
    next(error);
  }
};

exports.subscribersToUsers = async(req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    console.log(user);
    const update = { subscriptionsIds: req.body.subscriptionsIds };
    await user.updateOne(update);
    const updateUser = await User.findOne({ _id: req.params.id });
    const userMany = await User.find();
    const newValue = userMany.map(item =>
      req.body.subscriptionsIds.includes(item._id)
        ? { ...item, subscribersIds: [...item.subscribersIds, item._id] }
        : item,
    );
    // const updateUsers = await new User(n);
    // await userMany;
    // res.status(200).send(updateUser);
  } catch (error) {
    res.status(404).send({
      error,
    });
  }
};
