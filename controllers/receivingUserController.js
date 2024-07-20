const {
  createReceivingUser,
  findAllReceivingUsers,
  findReceivingUserById,
  updateReceivingUser,
  deleteReceivingUser
} = require('../repositories/receivingUserRepository');

const createReceivingUserHandler = async (req, res) => {
  try {
    const receivingUser = await createReceivingUser(req.body);
    res.status(201).json(receivingUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getReceivingUsersHandler = async (req, res) => {
  try {
    const receivingUsers = await findAllReceivingUsers();
    res.status(200).json(receivingUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReceivingUserByIdHandler = async (req, res) => {
  try {
    const receivingUser = await findReceivingUserById(req.params.id);
    if (!receivingUser) {
      return res.status(404).json({ error: 'ReceivingUser not found' });
    }
    res.status(200).json(receivingUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateReceivingUserHandler = async (req, res) => {
  try {
    const receivingUser = await updateReceivingUser(req.params.id, req.body);
    res.status(200).json(receivingUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteReceivingUserHandler = async (req, res) => {
  try {
    await deleteReceivingUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createReceivingUserHandler,
  getReceivingUsersHandler,
  getReceivingUserByIdHandler,
  updateReceivingUserHandler,
  deleteReceivingUserHandler
};
