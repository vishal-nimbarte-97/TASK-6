const LogEntry = require('../models/LogEntry');

const createLogEntry = async (logEntry) => {
  return await LogEntry.create(logEntry);
};

const findAllLogEntries = async () => {
  return await LogEntry.findAll();
};

const findLogEntryById = async (id) => {
  return await LogEntry.findByPk(id);
};

const updateLogEntry = async (id, logEntry) => {
  const [updated] = await LogEntry.update(logEntry, {
    where: { log_entry_id: id }
  });
  if (updated) {
    return await findLogEntryById(id);
  }
  throw new Error('LogEntry not found');
};

const deleteLogEntry = async (id) => {
  const deleted = await LogEntry.destroy({
    where: { log_entry_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('LogEntry not found');
};

module.exports = {
  createLogEntry,
  findAllLogEntries,
  findLogEntryById,
  updateLogEntry,
  deleteLogEntry
};
