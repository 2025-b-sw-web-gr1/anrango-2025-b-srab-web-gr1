# Examen Web 002 - API RESTful Brands y Models

API RESTful implementada en NestJS con TypeORM y SQLite que gestiona marcas y modelos de celulares con relación 1 a muchos.

## 📋 Descripción

Este proyecto implementa un sistema de gestión con dos entidades principales:

- **Brand (Marca)**: Representa fabricantes de celulares
- **Model (Modelo)**: Representa modelos específicos de celulares

### Relación 1 a Muchos

- Una **Marca** puede tener **muchos Modelos**
- Un **Modelo** pertenece a **una única Marca**

## 🚀 Tecnologías

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript/JavaScript
- **SQLite** - Base de datos embebida
- **TypeScript** - Lenguaje de programación

## 📦 Instalación

### 1. Clonar el repositorio

```bash
cd Examen-Web-001
```

### 2. Instalar dependencias

```bash
npm install
```

Las dependencias necesarias incluyen:
- `@nestjs/typeorm` - Integración de TypeORM con NestJS
- `typeorm` - ORM para base de datos
- `sqlite3` - Driver de SQLite

## ▶️ Ejecución

```bash
npm run start
```

### Modo desarrollo (con hot-reload)

```bash
npm run start:dev
```

### Modo producción

```bash
npm run build
npm run start:prod
```

El servidor se iniciará en `http://localhost:3000`

## 📡 Endpoints Disponibles

### Brands (Marcas)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/brands` | Obtener todas las marcas |
| GET | `/brands/:id` | Obtener una marca por ID |
| POST | `/brands` | Crear una marca |
| PUT | `/brands/:id` | Actualizar una marca |
| DELETE | `/brands/:id` | Eliminar una marca |
| GET | `/brands/:id/models` | Obtener modelos de una marca |

### Models (Modelos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/models` | Obtener todos los modelos |
| GET | `/models/:id` | Obtener un modelo por ID |
| POST | `/models` | Crear un modelo |
| PUT | `/models/:id` | Actualizar un modelo |
| DELETE | `/models/:id` | Eliminar un modelo |

## 📝 Ejemplos de Uso

### Crear una marca

```bash
curl -X POST http://localhost:3000/brands \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Samsung",
    "country": "Corea del Sur"
  }'
```

**Respuesta:**

```json
{
  "statusCode": 201,
  "data": {
    "id": 1,
    "name": "Samsung",
    "country": "Corea del Sur",
    "models": []
  }
}
```

### Obtener todas las marcas

```bash
curl http://localhost:3000/brands
```

**Respuesta:**

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "Samsung",
      "country": "Corea del Sur",
      "models": [...]
    }
  ]
}
```

### Obtener una marca por ID

```bash
curl http://localhost:3000/brands/1
```

**Respuesta:**

```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "name": "Samsung",
    "country": "Corea del Sur",
    "models": [...]
  }
}
```

### Actualizar una marca

```bash
curl -X PUT http://localhost:3000/brands/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Samsung Electronics",
    "country": "Corea del Sur"
  }'
```

**Respuesta:**

```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "name": "Samsung Electronics",
    "country": "Corea del Sur"
  }
}
```

### Eliminar una marca

```bash
curl -X DELETE http://localhost:3000/brands/1
```

**Respuesta:**

```json
{
  "statusCode": 204
}
```

### Crear un modelo

```bash
curl -X POST http://localhost:3000/models \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Galaxy S24",
    "year": 2024,
    "brand": {
      "id": 1
    }
  }'
```

**Respuesta:**

```json
{
  "statusCode": 201,
  "data": {
    "id": 1,
    "name": "Galaxy S24",
    "year": 2024,
    "brand": {
      "id": 1,
      "name": "Samsung",
      "country": "Corea del Sur"
    }
  }
}
```

### Obtener todos los modelos

```bash
curl http://localhost:3000/models
```

**Respuesta:**

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "Galaxy S24",
      "year": 2024,
      "brand": {
        "id": 1,
        "name": "Samsung",
        "country": "Corea del Sur"
      }
    }
  ]
}
```

### Obtener un modelo por ID

```bash
curl http://localhost:3000/models/1
```

### Actualizar un modelo

```bash
curl -X PUT http://localhost:3000/models/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Galaxy S24 Ultra",
    "year": 2024
  }'
```

### Eliminar un modelo

```bash
curl -X DELETE http://localhost:3000/models/1
```

### Obtener modelos de una marca específica

```bash
curl http://localhost:3000/brands/1/models
```

**Respuesta:**

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "Galaxy S24",
      "year": 2024
    },
    {
      "id": 2,
      "name": "Galaxy A54",
      "year": 2023
    }
  ]
}
```

## 🧪 Pruebas con Bruno

En la carpeta `bruno/` se encuentran archivos de prueba para todos los endpoints:

- `create-brand.bru` - Crear marca
- `get-all-brands.bru` - Obtener todas las marcas
- `get-brand-by-id.bru` - Obtener marca por ID
- `update-brand.bru` - Actualizar marca
- `delete-brand.bru` - Eliminar marca
- `get-models-by-brand.bru` - Obtener modelos de una marca
- `create-model.bru` - Crear modelo
- `get-all-models.bru` - Obtener todos los modelos
- `get-model-by-id.bru` - Obtener modelo por ID
- `update-model.bru` - Actualizar modelo
- `delete-model.bru` - Eliminar modelo

## 📁 Estructura del Proyecto

```
Examen-Web-001/
├── bruno/                  # Colección de pruebas Bruno
├── src/
│   ├── brands/            # Módulo de marcas
│   │   ├── brand.entity.ts
│   │   ├── brands.controller.ts
│   │   ├── brands.service.ts
│   │   └── brands.module.ts
│   ├── models/            # Módulo de modelos
│   │   ├── model.entity.ts
│   │   ├── models.controller.ts
│   │   ├── models.service.ts
│   │   └── models.module.ts
│   ├── app.module.ts      # Módulo principal con configuración TypeORM
│   └── main.ts            # Punto de entrada de la aplicación
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄️ Configuración de Base de Datos

La configuración de SQLite se encuentra en `src/app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Brand, Model],
  synchronize: true, // ⚠️ Solo para desarrollo
})
```

**Nota:** El archivo `db.sqlite` se crea automáticamente al iniciar la aplicación.

## 🔑 Entidades

### Brand (Marca)

```typescript
@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @OneToMany(() => Model, model => model.brand, { cascade: true })
  models: Model[];
}
```

### Model (Modelo)

```typescript
@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @ManyToOne(() => Brand, brand => brand.models)
  brand: Brand;
}
```

## ⚠️ Notas Importantes

1. **synchronize: true** - Esta opción está activada para desarrollo. En producción debe estar en `false` y usar migraciones.

2. **Base de datos** - El archivo `db.sqlite` no está incluido en el repositorio (ver `.gitignore`). Se creará automáticamente al iniciar la aplicación.

3. **CORS** - Está habilitado por defecto para permitir peticiones desde cualquier origen.

## 👨‍💻 Autor

STALIN ANRANGO

