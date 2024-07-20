const {
    createMetric,
    findAllMetrics,
    findMetricById,
    updateMetric,
    deleteMetric
  } = require('../repositories/metricsRepository');
  
  const createMetricHandler = async (req, res) => {
    try {
      const metric = await createMetric(req.body);
      res.status(201).json(metric);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const getMetricsHandler = async (req, res) => {
    try {
      const metrics = await findAllMetrics();
      res.status(200).json(metrics);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getMetricByIdHandler = async (req, res) => {
    try {
      const metric = await findMetricById(req.params.id);
      if (!metric) {
        return res.status(404).json({ error: 'Metric not found' });
      }
      res.status(200).json(metric);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateMetricHandler = async (req, res) => {
    try {
      const metric = await updateMetric(req.params.id, req.body);
      res.status(200).json(metric);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const deleteMetricHandler = async (req, res) => {
    try {
      await deleteMetric(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    createMetricHandler,
    getMetricsHandler,
    getMetricByIdHandler,
    updateMetricHandler,
    deleteMetricHandler
  };
  