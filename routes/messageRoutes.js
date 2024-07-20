const express = require('express');
const {
  createMessageHandler,
  getMessagesHandler,
  getMessageByIdHandler,
  updateMessageHandler,
  deleteMessageHandler
} = require('../controllers/messageController');

const router = express.Router();

router.post('/', createMessageHandler);
router.get('/', getMessagesHandler);
router.get('/:id', getMessageByIdHandler);
router.put('/:id', updateMessageHandler);
router.delete('/:id', deleteMessageHandler);

module.exports = router;
