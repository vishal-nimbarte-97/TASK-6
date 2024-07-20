const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Metrics = sequelize.define('Metrics', {
  metric_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  metric_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metric_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'metrics',
});

module.exports = Metrics;
