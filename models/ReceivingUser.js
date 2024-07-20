const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const LogEntry = require('./LogEntry');

const ReceivingUser = sequelize.define('ReceivingUser', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    references: {
      model: LogEntry,
      key: 'log_entry_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  receiving_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'receiving_users',
});

LogEntry.hasMany(ReceivingUser, { foreignKey: 'log_entry_id' });
ReceivingUser.belongsTo(LogEntry, { foreignKey: 'log_entry_id' });

module.exports = ReceivingUser;
