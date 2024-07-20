const SourceInfo = require('../models/SourceInfo');

const createSourceInfo = async (sourceInfo) => {
  return await SourceInfo.create(sourceInfo);
};

const findAllSourceInfo = async () => {
  return await SourceInfo.findAll();
};

const findSourceInfoById = async (id) => {
  return await SourceInfo.findByPk(id);
};

const updateSourceInfo = async (id, sourceInfo) => {
  const [updated] = await SourceInfo.update(sourceInfo, {
    where: { log_entry_id: id }
  });
  if (updated) {
    return await findSourceInfoById(id);
  }
  throw new Error('SourceInfo not found');
};

const deleteSourceInfo = async (id) => {
  const deleted = await SourceInfo.destroy({
    where: { log_entry_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('SourceInfo not found');
};

module.exports = {
  createSourceInfo,
  findAllSourceInfo,
  findSourceInfoById,
  updateSourceInfo,
  deleteSourceInfo
};
