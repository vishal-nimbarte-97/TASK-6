const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const LogEntry = require('./LogEntry');

const UserData = sequelize.define('UserData', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: LogEntry,
      key: 'log_entry_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  data: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  data_label: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_quality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_owner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_expiration: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'user_data',
});

LogEntry.hasOne(UserData, { foreignKey: 'log_entry_id' });
UserData.belongsTo(LogEntry, { foreignKey: 'log_entry_id' });

module.exports = UserData;
