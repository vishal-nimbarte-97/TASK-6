const express = require('express');
const {
  createReceivingUserHandler,
  getReceivingUsersHandler,
  getReceivingUserByIdHandler,
  updateReceivingUserHandler,
  deleteReceivingUserHandler
} = require('../controllers/receivingUserController');

const router = express.Router();

router.post('/', createReceivingUserHandler);
router.get('/', getReceivingUsersHandler);
router.get('/:id', getReceivingUserByIdHandler);
router.put('/:id', updateReceivingUserHandler);
router.delete('/:id', deleteReceivingUserHandler);

module.exports = router;
