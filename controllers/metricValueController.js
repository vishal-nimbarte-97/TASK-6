const {
    createMetricValue,
    findAllMetricValues,
    findMetricValueById,
    updateMetricValue,
    deleteMetricValue
  } = require('../repositories/metricValueRepository');
  
  const createMetricValueHandler = async (req, res) => {
    try {
      const metricValue = await createMetricValue(req.body);
      res.status(201).json(metricValue);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const getMetricValuesHandler = async (req, res) => {
    try {
      const metricValues = await findAllMetricValues();
      res.status(200).json(metricValues);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getMetricValueByIdHandler = async (req, res) => {
    try {
      const metricValue = await findMetricValueById(req.params.id);
      if (!metricValue) {
        return res.status(404).json({ error: 'MetricValue not found' });
      }
      res.status(200).json(metricValue);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateMetricValueHandler = async (req, res) => {
    try {
      const metricValue = await updateMetricValue(req.params.id, req.body);
      res.status(200).json(metricValue);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const deleteMetricValueHandler = async (req, res) => {
    try {
      await deleteMetricValue(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    createMetricValueHandler,
    getMetricValuesHandler,
    getMetricValueByIdHandler,
    updateMetricValueHandler,
    deleteMetricValueHandler
  };
  