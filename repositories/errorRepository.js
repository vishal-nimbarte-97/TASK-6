const Error = require('../models/Error');

const createError = async (error) => {
  return await Error.create(error);
};

const findAllErrors = async () => {
  return await Error.findAll();
};

const findErrorById = async (id) => {
  return await Error.findByPk(id);
};

const updateError = async (id, error) => {
  const [updated] = await Error.update(error, {
    where: { log_entry_id: id }
  });
  if (updated) {
    return await findErrorById(id);
  }
  throw new Error('Error not found');
};

const deleteError = async (id) => {
  const deleted = await Error.destroy({
    where: { log_entry_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('Error not found');
};

module.exports = {
  createError,
  findAllErrors,
  findErrorById,
  updateError,
  deleteError
};
