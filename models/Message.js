const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Message = sequelize.define('Message', {
  message_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message_timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  previous_message_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'messages',
});

module.exports = Message;
