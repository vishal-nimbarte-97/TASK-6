const {
    createSourceInfo,
    findAllSourceInfo,
    findSourceInfoById,
    updateSourceInfo,
    deleteSourceInfo
  } = require('../repositories/sourceInfoRepository');
  
  const createSourceInfoHandler = async (req, res) => {
    try {
      const sourceInfo = await createSourceInfo(req.body);
      res.status(201).json(sourceInfo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const getSourceInfoHandler = async (req, res) => {
    try {
      const sourceInfo = await findAllSourceInfo();
      res.status(200).json(sourceInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getSourceInfoByIdHandler = async (req, res) => {
    try {
      const sourceInfo = await findSourceInfoById(req.params.id);
      if (!sourceInfo) {
        return res.status(404).json({ error: 'SourceInfo not found' });
      }
      res.status(200).json(sourceInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateSourceInfoHandler = async (req, res) => {
    try {
      const sourceInfo = await updateSourceInfo(req.params.id, req.body);
      res.status(200).json(sourceInfo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const deleteSourceInfoHandler = async (req, res) => {
    try {
      await deleteSourceInfo(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    createSourceInfoHandler,
    getSourceInfoHandler,
    getSourceInfoByIdHandler,
    updateSourceInfoHandler,
    deleteSourceInfoHandler
  };
  