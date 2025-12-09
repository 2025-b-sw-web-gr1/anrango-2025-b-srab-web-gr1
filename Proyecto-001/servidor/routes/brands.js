const express = require('express');
const router = express.Router();
const { brandsDB } = require('../data/database');

// ===== GET /brands - Obtener todas las marcas =====
router.get('/', (req, res) => {
  try {
    const brands = brandsDB.getAll();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== GET /brands/:id - Obtener marca por ID =====
router.get('/:id', (req, res) => {
  try {
    const brand = brandsDB.getById(req.params.id);
    
    if (!brand) {
      return res.status(404).json({
        error: 'Marca no encontrada',
        message: `No existe una marca con el ID ${req.params.id}`
      });
    }
    
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== GET /brands/:id/models - Obtener modelos de una marca =====
router.get('/:id/models', (req, res) => {
  try {
    // Verificar que la marca existe
    const brand = brandsDB.getById(req.params.id);
    
    if (!brand) {
      return res.status(404).json({
        error: 'Marca no encontrada',
        message: `No existe una marca con el ID ${req.params.id}`
      });
    }
    
    const models = brandsDB.getModels(req.params.id);
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== POST /brands - Crear nueva marca =====
router.post('/', (req, res) => {
  try {
    const { name, country } = req.body;
    
    // Validaciones
    if (!name || !country) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name" y "country" son obligatorios'
      });
    }
    
    if (typeof name !== 'string' || typeof country !== 'string') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name" y "country" deben ser strings'
      });
    }
    
    const newBrand = brandsDB.create({ name, country });
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== PUT /brands/:id - Actualizar marca =====
router.put('/:id', (req, res) => {
  try {
    const { name, country } = req.body;
    
    // Validaciones
    if (!name || !country) {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name" y "country" son obligatorios'
      });
    }
    
    if (typeof name !== 'string' || typeof country !== 'string') {
      return res.status(400).json({
        error: 'Datos inválidos',
        message: 'Los campos "name" y "country" deben ser strings'
      });
    }
    
    const updatedBrand = brandsDB.update(req.params.id, { name, country });
    
    if (!updatedBrand) {
      return res.status(404).json({
        error: 'Marca no encontrada',
        message: `No existe una marca con el ID ${req.params.id}`
      });
    }
    
    res.status(200).json(updatedBrand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== DELETE /brands/:id - Eliminar marca =====
router.delete('/:id', (req, res) => {
  try {
    const deleted = brandsDB.delete(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({
        error: 'Marca no encontrada',
        message: `No existe una marca con el ID ${req.params.id}`
      });
    }
    
    res.status(204).send(); // No Content
  } catch (error) {
    if (error.message.includes('modelos asociados')) {
      return res.status(409).json({
        error: 'Conflicto',
        message: error.message
      });
    }
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
