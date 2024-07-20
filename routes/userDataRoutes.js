const express = require('express');
const {
  createUserDataHandler,
  getUserDataHandler,
  getUserDataByIdHandler,
  updateUserDataHandler,
  deleteUserDataHandler
} = require('../controllers/userDataController');

const router = express.Router();

router.post('/', createUserDataHandler);
router.get('/', getUserDataHandler);
router.get('/:id', getUserDataByIdHandler);
router.put('/:id', updateUserDataHandler);
router.delete('/:id', deleteUserDataHandler);

module.exports = router;
