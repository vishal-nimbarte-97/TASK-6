const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const Message = require('./Message');

const LogEntry = sequelize.define('LogEntry', {
  log_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Message,
      key: 'message_id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  log_entry_transport_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  log_entry_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  log_entry_details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  providing_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fusion: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  immediate_use: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  subsequent_data_label: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subsequent_use: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subsequent_user: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  log_entry_timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'log_entries',
});

Message.hasMany(LogEntry, { foreignKey: 'message_id' });
LogEntry.belongsTo(Message, { foreignKey: 'message_id' });

module.exports = LogEntry;
