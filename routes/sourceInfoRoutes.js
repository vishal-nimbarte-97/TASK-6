const express = require('express');
const {
  createSourceInfoHandler,
  getSourceInfoHandler,
  getSourceInfoByIdHandler,
  updateSourceInfoHandler,
  deleteSourceInfoHandler
} = require('../controllers/sourceInfoController');

const router = express.Router();

router.post('/', createSourceInfoHandler);
router.get('/', getSourceInfoHandler);
router.get('/:id', getSourceInfoByIdHandler);
router.put('/:id', updateSourceInfoHandler);
router.delete('/:id', deleteSourceInfoHandler);

module.exports = router;
