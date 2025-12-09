/**
 * Base de datos en memoria (simulación)
 * En un proyecto real, esto sería una base de datos como PostgreSQL, MongoDB, etc.
 */

// Almacenamiento en memoria
let brands = [
  { id: 1, name: 'Samsung', country: 'Corea del Sur' },
  { id: 2, name: 'Apple', country: 'Estados Unidos' },
  { id: 3, name: 'Xiaomi', country: 'China' }
];

let models = [
  { id: 1, name: 'Galaxy S23', year: 2023, brandId: 1 },
  { id: 2, name: 'Galaxy A54', year: 2023, brandId: 1 },
  { id: 3, name: 'iPhone 15 Pro', year: 2023, brandId: 2 },
  { id: 4, name: 'iPhone 15', year: 2023, brandId: 2 },
  { id: 5, name: 'Redmi Note 12', year: 2023, brandId: 3 }
];

// Contadores para IDs auto-incrementales
let brandIdCounter = brands.length > 0 ? Math.max(...brands.map(b => b.id)) + 1 : 1;
let modelIdCounter = models.length > 0 ? Math.max(...models.map(m => m.id)) + 1 : 1;

// ===== BRANDS CRUD =====

const brandsDB = {
  // Obtener todas las marcas
  getAll: () => {
    return [...brands]; // Retornar copia para evitar mutaciones
  },

  // Obtener marca por ID
  getById: (id) => {
    return brands.find(brand => brand.id === parseInt(id));
  },

  // Crear nueva marca
  create: (brandData) => {
    const newBrand = {
      id: brandIdCounter++,
      name: brandData.name,
      country: brandData.country
    };
    brands.push(newBrand);
    return newBrand;
  },

  // Actualizar marca
  update: (id, brandData) => {
    const index = brands.findIndex(brand => brand.id === parseInt(id));
    if (index === -1) return null;
    
    brands[index] = {
      id: parseInt(id),
      name: brandData.name,
      country: brandData.country
    };
    return brands[index];
  },

  // Eliminar marca
  delete: (id) => {
    const index = brands.findIndex(brand => brand.id === parseInt(id));
    if (index === -1) return false;
    
    // Verificar si tiene modelos asociados
    const hasModels = models.some(model => model.brandId === parseInt(id));
    if (hasModels) {
      throw new Error('No se puede eliminar una marca con modelos asociados');
    }
    
    brands.splice(index, 1);
    return true;
  },

  // Obtener modelos de una marca
  getModels: (brandId) => {
    return models.filter(model => model.brandId === parseInt(brandId));
  }
};

// ===== MODELS CRUD =====

const modelsDB = {
  // Obtener todos los modelos
  getAll: () => {
    return [...models]; // Retornar copia para evitar mutaciones
  },

  // Obtener modelo por ID
  getById: (id) => {
    return models.find(model => model.id === parseInt(id));
  },

  // Crear nuevo modelo
  create: (modelData) => {
    // Verificar que la marca existe
    const brandExists = brands.some(brand => brand.id === parseInt(modelData.brandId));
    if (!brandExists) {
      throw new Error('La marca especificada no existe');
    }

    const newModel = {
      id: modelIdCounter++,
      name: modelData.name,
      year: parseInt(modelData.year),
      brandId: parseInt(modelData.brandId)
    };
    models.push(newModel);
    return newModel;
  },

  // Actualizar modelo
  update: (id, modelData) => {
    const index = models.findIndex(model => model.id === parseInt(id));
    if (index === -1) return null;
    
    // Verificar que la marca existe
    const brandExists = brands.some(brand => brand.id === parseInt(modelData.brandId));
    if (!brandExists) {
      throw new Error('La marca especificada no existe');
    }

    models[index] = {
      id: parseInt(id),
      name: modelData.name,
      year: parseInt(modelData.year),
      brandId: parseInt(modelData.brandId)
    };
    return models[index];
  },

  // Eliminar modelo
  delete: (id) => {
    const index = models.findIndex(model => model.id === parseInt(id));
    if (index === -1) return false;
    
    models.splice(index, 1);
    return true;
  }
};

module.exports = {
  brandsDB,
  modelsDB
};
