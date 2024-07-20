const MetricValue = require('../models/MetricValue');

const createMetricValue = async (metricValue) => {
  return await MetricValue.create(metricValue);
};

const findAllMetricValues = async () => {
  return await MetricValue.findAll({
    include: [
      { model: LogEntry, as: 'logEntry' },
      { model: Metrics, as: 'metric' }
    ]
  });
};

const findMetricValueById = async (id) => {
  return await MetricValue.findByPk(id, {
    include: [
      { model: LogEntry, as: 'logEntry' },
      { model: Metrics, as: 'metric' }
    ]
  });
};

const updateMetricValue = async (id, metricValue) => {
  const [updated] = await MetricValue.update(metricValue, {
    where: { id }
  });
  if (updated) {
    return await findMetricValueById(id);
  }
  throw new Error('MetricValue not found');
};

const deleteMetricValue = async (id) => {
  const deleted = await MetricValue.destroy({
    where: { id }
  });
  if (deleted) {
    return true;
  }
  throw new Error('MetricValue not found');
};

module.exports = {
  createMetricValue,
  findAllMetricValues,
  findMetricValueById,
  updateMetricValue,
  deleteMetricValue
};
