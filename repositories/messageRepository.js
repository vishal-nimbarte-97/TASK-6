const Message = require("../models/Message");

const createMessage = async (message) => {
  return await Message.create(message);
};

const findAllMessages = async () => {
  return await Message.findAll();
};

const findMessageById = async (id) => {
  return await Message.findByPk(id);
};

const updateMessage = async (id, message) => {
  const [updated] = await Message.update(message, {
    where: { message_id: id },
  });
  if (updated) {
    return await findMessageById(id);
  }
  throw new Error("Message not found");
};

const deleteMessage = async (id) => {
  const deleted = await Message.destroy({
    where: { message_id: id },
  });
  if (deleted) {
    return true;
  }else{
    return "Message Deleted Successfully"
  }
  throw new Error("Message not found");
};

module.exports = {
  createMessage,
  findAllMessages,
  findMessageById,
  updateMessage,
  deleteMessage,
};
