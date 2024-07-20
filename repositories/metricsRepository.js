const Metrics = require('../models/Metrics');

const createMetric = async (metric) => {
  return await Metrics.create(metric);
};

const findAllMetrics = async () => {
  return await Metrics.findAll();
};

const findMetricById = async (id) => {
  return await Metrics.findByPk(id);
};

const updateMetric = async (id, metric) => {
  const [updated] = await Metrics.update(metric, {
    where: { metric_id: id }
  });
  if (updated) {
    return await findMetricById(id);
  }
  throw new Error('Metric not found');
};

const deleteMetric = async (id) => {
  const deleted = await Metrics.destroy({
    where: { metric_id: id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('Metric not found');
};

module.exports = {
  createMetric,
  findAllMetrics,
  findMetricById,
  updateMetric,
  deleteMetric
};
