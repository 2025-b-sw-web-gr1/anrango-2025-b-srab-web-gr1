# API de Marcas y Modelos de Celulares

## Descripción del Proyecto

Este proyecto documenta una API REST para gestionar marcas (brands) y modelos (models) de teléfonos celulares. La API permite realizar operaciones CRUD completas sobre ambas entidades y consultar la relación entre ellas.

## Relación 1 a Muchos (Brand -> Model)

La API implementa una relación **uno a muchos** entre las entidades:

- **Una Marca (Brand)** puede tener **muchos Modelos (Models)** de celulares
- **Un Modelo (Model)** pertenece a **una única Marca (Brand)**

Esta relación se establece mediante la clave foránea `brandId` en la entidad Model, que referencia al `id` de la entidad Brand.

### Ejemplo de Relación:

```
Brand: Samsung (id: 1)
  ├── Model: Galaxy S23 (id: 1, brandId: 1)
  ├── Model: Galaxy A54 (id: 2, brandId: 1)
  └── Model: Galaxy Z Fold 5 (id: 3, brandId: 1)

Brand: Apple (id: 2)
  ├── Model: iPhone 15 Pro (id: 4, brandId: 2)
  └── Model: iPhone 14 (id: 5, brandId: 2)
```

## Diagrama de Entidades

```
┌─────────────────────┐
│      Brand          │
├─────────────────────┤
│ id: integer (PK)    │
│ name: string        │
│ country: string     │
└─────────────────────┘
          │
          │ 1
          │
          │
          │ N
          ▼
┌─────────────────────┐
│      Model          │
├─────────────────────┤
│ id: integer (PK)    │
│ name: string        │
│ year: integer       │
│ brandId: integer(FK)│
└─────────────────────┘
```

## Endpoints REST Disponibles

### Endpoints de Brands (Marcas)

| Método | Endpoint           | Descripción                          |
|--------|-------------------|--------------------------------------|
| GET    | `/brands`         | Obtener todas las marcas             |
| GET    | `/brands/{id}`    | Obtener una marca por ID             |
| POST   | `/brands`         | Crear una nueva marca                |
| PUT    | `/brands/{id}`    | Actualizar una marca existente       |
| DELETE | `/brands/{id}`    | Eliminar una marca                   |
| GET    | `/brands/{id}/models` | Obtener todos los modelos de una marca |

### Endpoints de Models (Modelos)

| Método | Endpoint           | Descripción                          |
|--------|-------------------|--------------------------------------|
| GET    | `/models`         | Obtener todos los modelos            |
| GET    | `/models/{id}`    | Obtener un modelo por ID             |
| POST   | `/models`         | Crear un nuevo modelo                |
| PUT    | `/models/{id}`    | Actualizar un modelo existente       |
| DELETE | `/models/{id}`    | Eliminar un modelo                   |

## Cómo usar Swagger

Swagger (OpenAPI) es una especificación para documentar APIs REST de forma estandarizada.

### Pasos para usar Swagger:

1. **Visualizar la documentación:**
   - Abre el archivo `swagger/mi-api.yaml` en un editor compatible con OpenAPI
   - O usa el [Swagger Editor online](https://editor.swagger.io/) y pega el contenido del archivo YAML

2. **Explorar endpoints:**
   - La interfaz de Swagger muestra todos los endpoints disponibles
   - Puedes ver los parámetros requeridos, tipos de datos y respuestas esperadas

3. **Probar la API (si tienes un servidor corriendo):**
   - Swagger UI permite hacer peticiones directamente desde la interfaz
   - Configura la URL base del servidor en el campo "Servers"

### Extensiones recomendadas para VS Code:
- **Swagger Viewer**: Para visualizar archivos OpenAPI
- **OpenAPI (Swagger) Editor**: Para editar con autocompletado

## Cómo usar Bruno

Bruno es una herramienta moderna para probar APIs REST, similar a Postman pero con archivos en texto plano.

### Pasos para usar Bruno:

1. **Instalar Bruno:**
   - Descarga Bruno desde [https://www.usebruno.com/](https://www.usebruno.com/)
   - Instala la aplicación en tu sistema operativo

2. **Abrir la colección:**
   - Abre Bruno
   - Selecciona "Open Collection"
   - Navega hasta la carpeta `bruno/` de este proyecto

3. **Configurar la URL base:**
   - Los archivos `.bru` incluyen URLs base predeterminadas (`http://localhost:3000`)
   - Puedes modificarlas según tu servidor

4. **Ejecutar peticiones:**
   - Haz clic en cualquier archivo `.bru`
   - Presiona el botón "Send" para ejecutar la petición
   - Revisa la respuesta en el panel derecho

5. **Orden sugerido de pruebas:**
   - Primero: `create-brand.bru` (crear marcas)
   - Luego: `create-model.bru` (crear modelos asociados)
   - Después: `get-models-by-brand.bru` (verificar la relación)
   - Finalmente: Prueba los demás endpoints según necesites

### Ventajas de Bruno:
- ✅ Archivos en texto plano (fácil de versionar con Git)
- ✅ No requiere cuenta ni sincronización en la nube
- ✅ Interfaz limpia y rápida
- ✅ Soporte para variables de entorno

## Ejemplos de Uso

### Crear una Marca:
```json
POST /brands
{
  "name": "Samsung",
  "country": "Corea del Sur"
}
```

### Crear un Modelo:
```json
POST /models
{
  "name": "Galaxy S23",
  "year": 2023,
  "brandId": 1
}
```

### Obtener modelos de una marca:
```
GET /brands/1/models
```

## Tecnologías Utilizadas

- **OpenAPI 3.0**: Especificación de la API
- **YAML**: Formato para la documentación Swagger
- **Bruno**: Cliente HTTP para pruebas de API

## Notas Importantes

- Todos los IDs son autogenerados por el servidor
- El campo `brandId` es obligatorio al crear un modelo
- Al eliminar una marca, considera el manejo de modelos asociados (según implementación del servidor)
- Los archivos Bruno están configurados para `http://localhost:3000` por defecto
