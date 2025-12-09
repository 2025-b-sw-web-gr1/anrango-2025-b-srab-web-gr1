const express = require('express');
const router = express.Router();
const { modelsDB } = require('../data/database');

// ===== GET /models - Obtener todos los modelos =====
router.get('/', (req, res) => {
  try {
    const models = modelsDB.getAll();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== GET /models/:id - Obtener modelo por ID =====
router.get('/:id', (req, res) => {
  try {
    const model = modelsDB.getById(req.params.id);
    
    if (!model) {
      return res.status(404).json({
        error: 'Modelo no encontrado',
        message: `No existe un modelo con el ID ${req.params.id}`
      });
    }
    
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== POST /models - Crear nuevo modelo =====
router.post('/', (req, res) => {
  try {
    const { name, year, brandId } = req.body;
    
    // Validaciones
    if (!name || !year || !brandId) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name", "year" y "brandId" son obligatorios'
      });
    }
    
    if (typeof name !== 'string') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "name" debe ser un string'
      });
    }
    
    if (typeof year !== 'number' || year < 1900 || year > 2100) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "year" debe ser un número válido entre 1900 y 2100'
      });
    }
    
    if (typeof brandId !== 'number') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "brandId" debe ser un número'
      });
    }
    
    const newModel = modelsDB.create({ name, year, brandId });
    res.status(201).json(newModel);
  } catch (error) {
    if (error.message.includes('marca') && error.message.includes('no existe')) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: error.message
      });
    }
    res.status(500).json({ error: error.message });
  }
});

// ===== PUT /models/:id - Actualizar modelo =====
router.put('/:id', (req, res) => {
  try {
    const { name, year, brandId } = req.body;
    
    // Validaciones
    if (!name || !year || !brandId) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name", "year" y "brandId" son obligatorios'
      });
    }
    
    if (typeof name !== 'string') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "name" debe ser un string'
      });
    }
    
    if (typeof year !== 'number' || year < 1900 || year > 2100) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "year" debe ser un número válido entre 1900 y 2100'
      });
    }
    
    if (typeof brandId !== 'number') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'El campo "brandId" debe ser un número'
      });
    }
    
    const updatedModel = modelsDB.update(req.params.id, { name, year, brandId });
    
    if (!updatedModel) {
      return res.status(404).json({
        error: 'Modelo no encontrado',
        message: `No existe un modelo con el ID ${req.params.id}`
      });
    }
    
    res.status(200).json(updatedModel);
  } catch (error) {
    if (error.message.includes('marca') && error.message.includes('no existe')) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: error.message
      });
    }
    res.status(500).json({ error: error.message });
  }
});

// ===== DELETE /models/:id - Eliminar modelo =====
router.delete('/:id', (req, res) => {
  try {
    const deleted = modelsDB.delete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        error: 'Modelo no encontrado',
        message: `No existe un modelo con el ID ${req.params.id}`
      });
    }
    
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
