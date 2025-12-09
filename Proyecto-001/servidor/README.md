# 🚀 Servidor API - Marcas y Modelos de Celulares

API REST desarrollada con Node.js y Express para gestionar marcas y modelos de celulares.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Endpoints Disponibles](#-endpoints-disponibles)
- [Probando con Bruno](#-probando-con-bruno)
- [Datos de Prueba](#-datos-de-prueba)

## ✨ Características

- ✅ CRUD completo para Marcas (Brands)
- ✅ CRUD completo para Modelos (Models)
- ✅ Relación 1 a Muchos entre Brands y Models
- ✅ Validaciones de datos
- ✅ Manejo de errores
- ✅ CORS habilitado
- ✅ Base de datos en memoria (para desarrollo)
- ✅ Logging de peticiones

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** (viene con Node.js)
- **Bruno** (para probar los endpoints)

Para verificar que tienes Node.js y npm instalados:

```bash
node --version
npm --version
```

## 🔧 Instalación

### Paso 1: Navegar a la carpeta del servidor

```bash
cd "c:\Users\dstal\Downloads\AplicacionesWeb\anrango-2025-b-srab-web-gr1\Proyecto-001\servidor"
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Esto instalará:
- `express` - Framework web para Node.js
- `cors` - Middleware para habilitar CORS
- `nodemon` - Utilidad para desarrollo (reinicia automáticamente el servidor)

## 🚀 Uso

### Iniciar el servidor en modo producción

```bash
npm start
```

### Iniciar el servidor en modo desarrollo (con auto-reload)

```bash
npm run dev
```

### Verificar que el servidor está corriendo

Una vez iniciado, deberías ver en la consola:

```
==================================================
🚀 Servidor iniciado exitosamente
📡 Escuchando en: http://localhost:3000
📖 Documentación: http://localhost:3000
==================================================

✅ Listo para recibir peticiones desde Bruno
```

Abre tu navegador y ve a `http://localhost:3000` para ver la documentación de la API.

## 📁 Estructura del Proyecto

```
servidor/
│
├── data/
│   └── database.js          # Base de datos en memoria
│
├── routes/
│   ├── brands.js            # Rutas para marcas
│   └── models.js            # Rutas para modelos
│
├── server.js                # Archivo principal del servidor
├── package.json             # Dependencias y scripts
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Este archivo
```

## 🌐 Endpoints Disponibles

### 📱 Brands (Marcas)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/brands` | Obtener todas las marcas |
| GET | `/brands/:id` | Obtener una marca por ID |
| GET | `/brands/:id/models` | Obtener todos los modelos de una marca |
| POST | `/brands` | Crear una nueva marca |
| PUT | `/brands/:id` | Actualizar una marca existente |
| DELETE | `/brands/:id` | Eliminar una marca |

### 📲 Models (Modelos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/models` | Obtener todos los modelos |
| GET | `/models/:id` | Obtener un modelo por ID |
| POST | `/models` | Crear un nuevo modelo |
| PUT | `/models/:id` | Actualizar un modelo existente |
| DELETE | `/models/:id` | Eliminar un modelo |

## 🧪 Probando con Bruno

### Paso 1: Asegúrate de que el servidor esté corriendo

```bash
npm start
```

### Paso 2: Abrir Bruno

1. Abre la aplicación **Bruno**
2. Ve a `File > Open Collection`
3. Selecciona la carpeta: `Proyecto-001/bruno`

### Paso 3: Probar los endpoints

Bruno ya tiene todos los requests configurados. Simplemente:

1. Selecciona un request (por ejemplo, "Get All Brands")
2. Haz clic en **Send** o presiona `Ctrl + Enter`
3. Verás la respuesta en el panel de la derecha

### 📝 Orden Recomendado de Pruebas

1. **GET /brands** - Ver las marcas existentes
2. **POST /brands** - Crear una nueva marca
3. **GET /brands/:id** - Ver la marca que acabas de crear
4. **POST /models** - Crear un modelo asociado a una marca
5. **GET /brands/:id/models** - Ver los modelos de una marca
6. **PUT /brands/:id** - Actualizar una marca
7. **PUT /models/:id** - Actualizar un modelo
8. **DELETE /models/:id** - Eliminar un modelo
9. **DELETE /brands/:id** - Eliminar una marca

## 📊 Datos de Prueba

El servidor viene con datos de prueba pre-cargados:

### Marcas (Brands)

```json
[
  { "id": 1, "name": "Samsung", "country": "Corea del Sur" },
  { "id": 2, "name": "Apple", "country": "Estados Unidos" },
  { "id": 3, "name": "Xiaomi", "country": "China" }
]
```

### Modelos (Models)

```json
[
  { "id": 1, "name": "Galaxy S23", "year": 2023, "brandId": 1 },
  { "id": 2, "name": "Galaxy A54", "year": 2023, "brandId": 1 },
  { "id": 3, "name": "iPhone 15 Pro", "year": 2023, "brandId": 2 },
  { "id": 4, "name": "iPhone 15", "year": 2023, "brandId": 2 },
  { "id": 5, "name": "Redmi Note 12", "year": 2023, "brandId": 3 }
]
```

## 🔍 Ejemplos de Uso

### Crear una nueva marca

**Request:**
```http
POST http://localhost:3000/brands
Content-Type: application/json

{
  "name": "Motorola",
  "country": "Estados Unidos"
}
```

**Response:**
```json
{
  "id": 4,
  "name": "Motorola",
  "country": "Estados Unidos"
}
```

### Crear un nuevo modelo

**Request:**
```http
POST http://localhost:3000/models
Content-Type: application/json

{
  "name": "Edge 40",
  "year": 2023,
  "brandId": 4
}
```

**Response:**
```json
{
  "id": 6,
  "name": "Edge 40",
  "year": 2023,
  "brandId": 4
}
```

### Obtener modelos de una marca

**Request:**
```http
GET http://localhost:3000/brands/1/models
```

**Response:**
```json
[
  { "id": 1, "name": "Galaxy S23", "year": 2023, "brandId": 1 },
  { "id": 2, "name": "Galaxy A54", "year": 2023, "brandId": 1 }
]
```

## ⚠️ Notas Importantes

### Base de Datos en Memoria

Los datos se almacenan en memoria, lo que significa que:
- ✅ **Ventaja**: No necesitas configurar una base de datos
- ⚠️ **Desventaja**: Los datos se pierden cuando detienes el servidor

Si quieres que los datos persistan, necesitarías implementar una base de datos real (PostgreSQL, MongoDB, etc.)

### Validaciones Implementadas

- Los campos obligatorios deben estar presentes
- Los tipos de datos deben ser correctos
- No se puede crear un modelo con una marca que no existe
- No se puede eliminar una marca que tenga modelos asociados

### Códigos de Estado HTTP

- `200 OK` - Operación exitosa
- `201 Created` - Recurso creado exitosamente
- `204 No Content` - Eliminación exitosa
- `400 Bad Request` - Datos inválidos
- `404 Not Found` - Recurso no encontrado
- `409 Conflict` - Conflicto (ej: eliminar marca con modelos)
- `500 Internal Server Error` - Error del servidor

## 🐛 Solución de Problemas

### El servidor no inicia

**Error:** `Port 3000 is already in use`

**Solución:** Ya tienes otro servidor corriendo en el puerto 3000. Ciérralo o cambia el puerto en `server.js`.

### Bruno no puede conectarse

**Error:** `connect ECONNREFUSED`

**Solución:** Asegúrate de que el servidor esté corriendo antes de enviar peticiones desde Bruno.

### Los cambios no se guardan

**Solución:** Es normal. La base de datos está en memoria. Los datos se reinician cada vez que reinicias el servidor.

## 📞 Soporte

Si tienes problemas:

1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que las dependencias estén instaladas: `npm install`
3. Verifica que el servidor esté corriendo: `npm start`
4. Revisa la consola del servidor para ver los logs

## 🎯 Próximos Pasos

Una vez que domines esta API, podrías:

- [ ] Implementar una base de datos real (PostgreSQL, MongoDB)
- [ ] Agregar autenticación (JWT)
- [ ] Implementar paginación en los endpoints GET
- [ ] Agregar filtros y búsquedas
- [ ] Crear documentación con Swagger
- [ ] Agregar tests unitarios

---

**¡Listo!**
