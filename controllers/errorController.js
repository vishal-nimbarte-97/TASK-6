const {
    createError,
    findAllErrors,
    findErrorById,
    updateError,
    deleteError
  } = require('../repositories/errorRepository');
  
  const createErrorHandler = async (req, res) => {
    try {
      const error = await createError(req.body);
      res.status(201).json(error);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const getErrorsHandler = async (req, res) => {
    try {
      const errors = await findAllErrors();
      res.status(200).json(errors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getErrorByIdHandler = async (req, res) => {
    try {
      const error = await findErrorById(req.params.id);
      if (!error) {
        return res.status(404).json({ error: 'Error not found' });
      }
      res.status(200).json(error);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateErrorHandler = async (req, res) => {
    try {
      const error = await updateError(req.params.id, req.body);
      res.status(200).json(error);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const deleteErrorHandler = async (req, res) => {
    try {
      await deleteError(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    createErrorHandler,
    getErrorsHandler,
    getErrorByIdHandler,
    updateErrorHandler,
    deleteErrorHandler
  };
  