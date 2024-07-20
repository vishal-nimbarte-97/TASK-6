const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const LogEntry = require('./LogEntry');

const SourceInfo = sequelize.define('SourceInfo', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    references: {
      model: LogEntry,
      key: 'log_entry_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  source_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  source_transport_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  source_timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'source_info',
});

LogEntry.hasMany(SourceInfo, { foreignKey: 'log_entry_id' });
SourceInfo.belongsTo(LogEntry, { foreignKey: 'log_entry_id' });

module.exports = SourceInfo;
