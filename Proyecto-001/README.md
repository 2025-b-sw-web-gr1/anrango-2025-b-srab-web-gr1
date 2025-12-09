# Proyecto API: Marcas y Modelos de Celulares

Este proyecto proporciona documentación completa y herramientas de prueba para una API REST que gestiona marcas y modelos de teléfonos celulares, implementando una relación **1 a Muchos**.

## 📋 Estructura del Proyecto

```
Proyecto-001/
│
├── doc/
│   └── README.md          # Documentación completa del proyecto
│
├── swagger/
│   └── mi-api.yaml        # Especificación OpenAPI 3.0
│
├── bruno/
│   ├── bruno.json         # Configuración de la colección Bruno
│   ├── create-brand.bru   # Crear marca
│   ├── get-all-brands.bru # Obtener todas las marcas
│   ├── get-brand-by-id.bru # Obtener marca por ID
│   ├── update-brand.bru   # Actualizar marca
│   ├── delete-brand.bru   # Eliminar marca
│   ├── create-model.bru   # Crear modelo
│   ├── get-all-models.bru # Obtener todos los modelos
│   ├── get-model-by-id.bru # Obtener modelo por ID
│   ├── update-model.bru   # Actualizar modelo
│   ├── delete-model.bru   # Eliminar modelo
│   └── get-models-by-brand.bru # Obtener modelos de una marca
│
└── README.md              # Este archivo
```

## 🎯 Descripción

La API implementa un sistema de gestión con dos entidades principales:

- **Brand (Marca)**: Representa fabricantes de celulares
- **Model (Modelo)**: Representa modelos específicos de celulares

### Relación 1 a Muchos

- Una **Marca** puede tener **muchos Modelos**
- Un **Modelo** pertenece a **una única Marca**

## 🚀 Inicio Rápido

### 1. Ver la Documentación

Consulta la documentación completa en [`doc/README.md`](./doc/README.md) para:
- Descripción detallada de la relación 1 a muchos
- Lista completa de endpoints
- Diagramas de entidades
- Guías de uso

### 2. Explorar la Especificación Swagger

Abre [`swagger/mi-api.yaml`](./swagger/mi-api.yaml) en:
- [Swagger Editor Online](https://editor.swagger.io/)
- VS Code con extensión "Swagger Viewer"
- Cualquier visor de OpenAPI 3.0

### 3. Probar con Bruno

1. **Instala Bruno**: [https://www.usebruno.com/](https://www.usebruno.com/)
2. **Abre la colección**: Carpeta `bruno/`
3. **Ejecuta las peticiones** en este orden:
   - `create-brand.bru` → Crear marcas
   - `create-model.bru` → Crear modelos
   - `get-models-by-brand.bru` → Ver la relación

## 📚 Entidades

### Brand (Marca)

```json
{
  "id": 1,
  "name": "Samsung",
  "country": "Corea del Sur"
}
```

| Campo   | Tipo    | Descripción           |
|---------|---------|----------------------|
| id      | integer | Identificador único  |
| name    | string  | Nombre de la marca   |
| country | string  | País de origen       |

### Model (Modelo)

```json
{
  "id": 1,
  "name": "Galaxy S23",
  "year": 2023,
  "brandId": 1
}
```

| Campo   | Tipo    | Descripción                    |
|---------|---------|--------------------------------|
| id      | integer | Identificador único            |
| name    | string  | Nombre del modelo              |
| year    | integer | Año de lanzamiento             |
| brandId | integer | ID de la marca (clave foránea) |

## 🔗 Endpoints Principales

### Brands (Marcas)

- `GET /brands` - Listar todas las marcas
- `GET /brands/{id}` - Obtener una marca
- `POST /brands` - Crear marca
- `PUT /brands/{id}` - Actualizar marca
- `DELETE /brands/{id}` - Eliminar marca
- `GET /brands/{id}/models` - **Obtener modelos de una marca** ⭐

### Models (Modelos)

- `GET /models` - Listar todos los modelos
- `GET /models/{id}` - Obtener un modelo
- `POST /models` - Crear modelo
- `PUT /models/{id}` - Actualizar modelo
- `DELETE /models/{id}` - Eliminar modelo

## 💡 Ejemplos de Uso

### Escenario 1: Crear una marca y sus modelos

```bash
# 1. Crear la marca Samsung
POST /brands
{
  "name": "Samsung",
  "country": "Corea del Sur"
}
# Respuesta: { "id": 1, ... }

# 2. Crear modelos de Samsung
POST /models
{
  "name": "Galaxy S23",
  "year": 2023,
  "brandId": 1
}

POST /models
{
  "name": "Galaxy A54",
  "year": 2023,
  "brandId": 1
}

# 3. Ver todos los modelos de Samsung
GET /brands/1/models
```

### Escenario 2: Consultar información completa

```bash
# Ver todas las marcas
GET /brands

# Ver todos los modelos (de todas las marcas)
GET /models

# Ver modelos específicos de Apple (supongamos id=2)
GET /brands/2/models
```

## 🛠️ Herramientas Recomendadas

### Para Swagger/OpenAPI:
- **Swagger Editor**: https://editor.swagger.io/
- **VS Code Extension**: Swagger Viewer
- **Postman**: Importar archivo YAML

### Para Bruno:
- **Bruno App**: https://www.usebruno.com/
- **Ventajas**: Archivos en Git, sin cloud, open-source

## 📝 Notas Importantes

1. **URL Base**: Los archivos Bruno usan `http://localhost:3000` por defecto
2. **Servidor requerido**: Este proyecto solo incluye documentación. Necesitas implementar el servidor backend.
3. **Validaciones**: El campo `brandId` debe ser un ID de marca válido existente
4. **Eliminación en cascada**: Considera el comportamiento al eliminar marcas con modelos

## 🎓 Propósito Académico

Este proyecto fue creado como material educativo para demostrar:
- Diseño de APIs RESTful
- Documentación con OpenAPI/Swagger
- Pruebas de APIs con Bruno
- Relaciones entre entidades (1 a Muchos)
- Buenas prácticas en diseño de endpoints

## 📄 Licencia

Proyecto académico de código abierto.

---

**Autor**: Stalin Anrango, Paul Dávila 
**Fecha**: Diciembre 2025
