const express = require('express');
const cors = require('cors');
const brandsRouter = require('./routes/brands');
const modelsRouter = require('./routes/models');

const app = express();
const PORT = 3000;

// ===== MIDDLEWARES =====
app.use(cors()); // Habilitar CORS para todas las peticiones
app.use(express.json()); // Parsear JSON en el body de las peticiones

// Middleware para logging de peticiones
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ===== RUTAS =====
app.use('/brands', brandsRouter);
app.use('/models', modelsRouter);

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API de Marcas y Modelos de Celulares',
    version: '1.0.0',
    endpoints: {
      brands: {
        getAll: 'GET /brands',
        getById: 'GET /brands/:id',
        getModels: 'GET /brands/:id/models',
        create: 'POST /brands',
        update: 'PUT /brands/:id',
        delete: 'DELETE /brands/:id'
      },
      models: {
        getAll: 'GET /models',
        getById: 'GET /models/:id',
        create: 'POST /models',
        update: 'PUT /models/:id',
        delete: 'DELETE /models/:id'
      }
    }
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    message: `La ruta ${req.method} ${req.url} no existe`
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message
  });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log(`🚀 Servidor iniciado exitosamente`);
  console.log(`📡 Escuchando en: http://localhost:${PORT}`);
  console.log(`📖 Documentación: http://localhost:${PORT}`);
  console.log('='.repeat(50));
  console.log('\n✅ Listo para recibir peticiones desde Bruno\n');
});
