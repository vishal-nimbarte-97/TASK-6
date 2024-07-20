const express = require('express');
const {
  createMetricHandler,
  getMetricsHandler,
  getMetricByIdHandler,
  updateMetricHandler,
  deleteMetricHandler
} = require('../controllers/metricsController');

const router = express.Router();

router.post('/', createMetricHandler);
router.get('/', getMetricsHandler);
router.get('/:id', getMetricByIdHandler);
router.put('/:id', updateMetricHandler);
router.delete('/:id', deleteMetricHandler);

module.exports = router;
