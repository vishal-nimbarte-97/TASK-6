const express = require('express');
const {
  createLogEntryHandler,
  getLogEntriesHandler,
  getLogEntryByIdHandler,
  updateLogEntryHandler,
  deleteLogEntryHandler
} = require('../controllers/logEntryController');

const router = express.Router();

router.post('/', createLogEntryHandler);
router.get('/', getLogEntriesHandler);
router.get('/:id', getLogEntryByIdHandler);
router.put('/:id', updateLogEntryHandler);
router.delete('/:id', deleteLogEntryHandler);

module.exports = router;
