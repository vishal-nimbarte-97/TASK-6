const express = require('express');
const {
  createMetricValueHandler,
  getMetricValuesHandler,
  getMetricValueByIdHandler,
  updateMetricValueHandler,
  deleteMetricValueHandler
} = require('../controllers/metricValueController');

const router = express.Router();

router.post('/', createMetricValueHandler);
router.get('/', getMetricValuesHandler);
router.get('/:id', getMetricValueByIdHandler);
router.put('/:id', updateMetricValueHandler);
router.delete('/:id', deleteMetricValueHandler);

module.exports = router;
