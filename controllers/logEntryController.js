const {
  createLogEntry,
  findAllLogEntries,
  findLogEntryById,
  updateLogEntry,
  deleteLogEntry
} = require('../repositories/logEntryRepository');

const createLogEntryHandler = async (req, res) => {
  try {
    const logEntry = await createLogEntry(req.body);
    res.status(201).json(logEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getLogEntriesHandler = async (req, res) => {
  try {
    const logEntries = await findAllLogEntries();
    res.status(200).json(logEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLogEntryByIdHandler = async (req, res) => {
  try {
    const logEntry = await findLogEntryById(req.params.id);
    if (!logEntry) {
      return res.status(404).json({ error: 'LogEntry not found' });
    }
    res.status(200).json(logEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateLogEntryHandler = async (req, res) => {
  try {
    const logEntry = await updateLogEntry(req.params.id, req.body);
    res.status(200).json(logEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteLogEntryHandler = async (req, res) => {
  try {
    await deleteLogEntry(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createLogEntryHandler,
  getLogEntriesHandler,
  getLogEntryByIdHandler,
  updateLogEntryHandler,
  deleteLogEntryHandler
};
