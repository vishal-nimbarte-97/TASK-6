const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const LogEntry = require('./LogEntry');

const Error = sequelize.define('Error', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    references: {
      model: LogEntry,
      key: 'log_entry_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  error_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  error_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  error_details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resolution_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'errors',
});

LogEntry.hasMany(Error, { foreignKey: 'log_entry_id' });
Error.belongsTo(LogEntry, { foreignKey: 'log_entry_id' });

module.exports = Error;
