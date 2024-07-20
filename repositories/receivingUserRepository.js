const ReceivingUser = require('../models/ReceivingUser');

const createReceivingUser = async (receivingUser) => {
  return await ReceivingUser.create(receivingUser);
};

const findAllReceivingUsers = async () => {
  return await ReceivingUser.findAll();
};

const findReceivingUserById = async (id) => {
  return await ReceivingUser.findByPk(id);
};

const updateReceivingUser = async (id, receivingUser) => {
  const [updated] = await ReceivingUser.update(receivingUser, {
    where: { log_entry_id: id }
  });
  if (updated) {
    return await findReceivingUserById(id);
  }
  throw new Error('ReceivingUser not found');
};

const deleteReceivingUser = async (id) => {
  const deleted = await ReceivingUser.destroy({
    where: { log_entry_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('ReceivingUser not found');
};

module.exports = {
  createReceivingUser,
  findAllReceivingUsers,
  findReceivingUserById,
  updateReceivingUser,
  deleteReceivingUser
};
