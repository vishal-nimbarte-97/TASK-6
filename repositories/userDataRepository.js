const UserData = require('../models/UserData');

const createUserData = async (userData) => {
  return await UserData.create(userData);
};

const findAllUserData = async () => {
  return await UserData.findAll();
};

const findUserDataById = async (id) => {
  return await UserData.findByPk(id);
};

const updateUserData = async (id, userData) => {
  const [updated] = await UserData.update(userData, {
    where: { log_entry_id: id }
  });
  if (updated) {
    return await findUserDataById(id);
  }
  throw new Error('UserData not found');
};

const deleteUserData = async (id) => {
  const deleted = await UserData.destroy({
    where: { log_entry_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('UserData not found');
};

module.exports = {
  createUserData,
  findAllUserData,
  findUserDataById,
  updateUserData,
  deleteUserData
};
