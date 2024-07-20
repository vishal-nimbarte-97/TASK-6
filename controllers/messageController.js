const {
  createMessage,
  findAllMessages,
  findMessageById,
  updateMessage,
  deleteMessage
} = require('../repositories/messageRepository');

const createMessageHandler = async (req, res) => {
  try {
    const message = await createMessage(req.body);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMessagesHandler = async (req, res) => {
  try {
    const messages = await findAllMessages();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMessageByIdHandler = async (req, res) => {
  try {
    const message = await findMessageById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateMessageHandler = async (req, res) => {
  try {
    const message = await updateMessage(req.params.id, req.body);
    res.status(200).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteMessageHandler = async (req, res) => {
  try {
    await deleteMessage(req.params.id);
    res.status(200).json({Message: "Message Deleted Successfully..!"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createMessageHandler,
  getMessagesHandler,
  getMessageByIdHandler,
  updateMessageHandler,
  deleteMessageHandler
};
