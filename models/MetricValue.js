const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const LogEntry = require('./LogEntry');
const Metrics = require('./Metrics');

const MetricValue = sequelize.define('MetricValue', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    references: {
      model: LogEntry,
      key: 'log_entry_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  metric_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Metrics,
      key: 'metric_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  metric_value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'metric_values',
});

LogEntry.hasMany(MetricValue, { foreignKey: 'log_entry_id' });
MetricValue.belongsTo(LogEntry, { foreignKey: 'log_entry_id' });

Metrics.hasMany(MetricValue, { foreignKey: 'metric_id' });
MetricValue.belongsTo(Metrics, { foreignKey: 'metric_id' });

module.exports = MetricValue;
