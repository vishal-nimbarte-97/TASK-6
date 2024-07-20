const express = require('express');
const {
  createErrorHandler,
  getErrorsHandler,
  getErrorByIdHandler,
  updateErrorHandler,
  deleteErrorHandler
} = require('../controllers/errorController');

const router = express.Router();

router.post('/', createErrorHandler);
router.get('/', getErrorsHandler);
router.get('/:id', getErrorByIdHandler);
router.put('/:id', updateErrorHandler);
router.delete('/:id', deleteErrorHandler);

module.exports = router;
