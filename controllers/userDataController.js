const {
  createUserData,
  findAllUserData,
  findUserDataById,
  updateUserData,
  deleteUserData
} = require('../repositories/userDataRepository');

const createUserDataHandler = async (req, res) => {
  try {
    const userData = await createUserData(req.body);
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserDataHandler = async (req, res) => {
  try {
    const userData = await findAllUserData();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserDataByIdHandler = async (req, res) => {
  try {
    const userData = await findUserDataById(req.params.id);
    if (!userData) {
      return res.status(404).json({ error: 'UserData not found' });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserDataHandler = async (req, res) => {
  try {
    const userData = await updateUserData(req.params.id, req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUserDataHandler = async (req, res) => {
  try {
    await deleteUserData(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUserDataHandler,
  getUserDataHandler,
  getUserDataByIdHandler,
  updateUserDataHandler,
  deleteUserDataHandler
};
