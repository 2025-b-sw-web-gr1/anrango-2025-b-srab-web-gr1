# Proyecto 002 - API RESTful con Documentación Swagger

API RESTful implementada en NestJS con TypeORM, SQLite y documentación automática con Swagger/OpenAPI para gestión de marcas y modelos de celulares.

## 📋 Descripción

Este proyecto implementa un sistema de gestión con dos entidades principales que extiende el **Examen-Web-001** agregando documentación completa de endpoints usando **Swagger (OpenAPI)**.

### Entidades

- **Brand (Marca)**: Representa fabricantes de celulares
- **Model (Modelo)**: Representa modelos específicos de celulares

### Relación 1 a Muchos

- Una **Marca** puede tener **muchos Modelos**
- Un **Modelo** pertenece a **una única Marca**

## 🚀 Tecnologías

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript/JavaScript
- **SQLite** - Base de datos embebida
- **Swagger/OpenAPI** - Documentación automática de APIs
- **TypeScript** - Lenguaje de programación

## 📦 Instalación

### 1. Navegar al directorio del proyecto

```bash
cd Proyecto-002
```

### 2. Instalar dependencias

```bash
npm install
```

Las dependencias necesarias incluyen:

- `@nestjs/swagger` - Integración de Swagger con NestJS
- `swagger-ui-express` - UI de Swagger
- `@nestjs/typeorm` - Integración de TypeORM con NestJS
- `typeorm` - ORM para base de datos
- `sqlite3` - Driver de SQLite

## ▶️ Ejecución

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

## 📚 Acceso a la Documentación Swagger

Una vez que el servidor esté corriendo, accede a la documentación interactiva de Swagger:

🔗 **http://localhost:3000/api**

Desde la interfaz de Swagger podrás:

- Ver todos los endpoints disponibles
- Probar los endpoints directamente desde el navegador
- Ver los esquemas de datos (DTOs)
- Ver ejemplos de request y response
- Ejecutar peticiones sin necesidad de herramientas externas

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

### Usando cURL

#### Crear una marca

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

#### Obtener todas las marcas

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

#### Obtener una marca por ID

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

#### Actualizar una marca

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

#### Eliminar una marca

```bash
curl -X DELETE http://localhost:3000/brands/1
```

**Respuesta:**

```json
{
  "statusCode": 204
}
```

#### Crear un modelo

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

#### Obtener todos los modelos

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

#### Obtener un modelo por ID

```bash
curl http://localhost:3000/models/1
```

#### Actualizar un modelo

```bash
curl -X PUT http://localhost:3000/models/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Galaxy S24 Ultra",
    "year": 2024
  }'
```

#### Eliminar un modelo

```bash
curl -X DELETE http://localhost:3000/models/1
```

#### Obtener modelos de una marca específica

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

### Usando Swagger UI

1. Abre el navegador en `http://localhost:3000/api`
2. Selecciona el endpoint que deseas probar
3. Click en "Try it out"
4. Completa los parámetros necesarios
5. Click en "Execute"
6. Observa la respuesta en tiempo real

## 🔧 Configuración de Swagger

La configuración de Swagger se encuentra en `src/main.ts`:

```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('API de Marcas y Modelos de Celulares')
  .setDescription('Documentación completa de endpoints RESTful')
  .setVersion('1.0')
  .addTag('brands', 'Operaciones relacionadas con marcas')
  .addTag('models', 'Operaciones relacionadas con modelos')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

## 📘 DTOs Documentados

### CreateBrandDto

```typescript
{
  name: string;      // Ejemplo: "Samsung"
  country: string;   // Ejemplo: "Corea del Sur"
}
```

### CreateModelDto

```typescript
{
  name: string;      // Ejemplo: "Galaxy S24"
  year: number;      // Ejemplo: 2024
  brand: {
    id: number;      // Ejemplo: 1
  }
}
```

## 🎯 Decoradores Utilizados

### En Controladores

- `@ApiTags()` - Agrupa endpoints por categoría
- `@ApiOperation()` - Describe la operación del endpoint
- `@ApiResponse()` - Documenta posibles respuestas
- `@ApiParam()` - Documenta parámetros de ruta
- `@ApiBody()` - Documenta el body del request

### En DTOs

- `@ApiProperty()` - Documenta cada propiedad del DTO

**Ejemplo en controlador:**

```typescript
@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  @Get()
  @ApiOperation({ summary: 'Obtener todas las marcas' })
  @ApiResponse({ status: 200, description: 'Lista de marcas' })
  async findAll() {
    // ...
  }
}
```

**Ejemplo en DTO:**

```typescript
export class CreateBrandDto {
  @ApiProperty({ example: 'Samsung' })
  name: string;
  
  @ApiProperty({ example: 'Corea del Sur' })
  country: string;
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
Proyecto-002/
├── bruno/                  # Colección de pruebas Bruno
├── src/
│   ├── brands/            # Módulo de marcas
│   │   ├── dto/           # DTOs documentados
│   │   │   ├── create-brand.dto.ts
│   │   │   └── update-brand.dto.ts
│   │   ├── brand.entity.ts
│   │   ├── brands.controller.ts  # Con decoradores Swagger
│   │   ├── brands.service.ts
│   │   └── brands.module.ts
│   ├── models/            # Módulo de modelos
│   │   ├── dto/           # DTOs documentados
│   │   │   ├── create-model.dto.ts
│   │   │   └── update-model.dto.ts
│   │   ├── model.entity.ts
│   │   ├── models.controller.ts  # Con decoradores Swagger
│   │   ├── models.service.ts
│   │   └── models.module.ts
│   ├── app.module.ts      # Módulo principal con TypeORM
│   └── main.ts            # Configuración de Swagger
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄️ Base de Datos

La configuración de SQLite se encuentra en `src/app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Brand, Model],
  synchronize: true, // ⚠️ Solo para desarrollo
})
```

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

2. **Base de datos** - El archivo `db.sqlite` no está incluido en el repositorio. Se creará automáticamente al iniciar la aplicación.

3. **CORS** - Está habilitado por defecto para permitir peticiones desde cualquier origen.

4. **Swagger UI** - La documentación interactiva está disponible SOLO cuando el servidor está corriendo.

## 🎓 Diferencias con Examen-Web-001

### Nuevas Dependencias

- `@nestjs/swagger`
- `swagger-ui-express`

### Nuevos Archivos

- DTOs documentados en `src/brands/dto/` y `src/models/dto/`

### Archivos Modificados

- `src/main.ts` - Configuración de Swagger
- `src/brands/brands.controller.ts` - Decoradores de Swagger
- `src/models/models.controller.ts` - Decoradores de Swagger
- `package.json` - Dependencias de Swagger

## 📊 Respuestas HTTP Documentadas

Cada endpoint está documentado con sus posibles respuestas:

- **200** - Operación exitosa
- **201** - Recurso creado exitosamente
- **204** - Recurso eliminado (sin contenido)
- **400** - Datos inválidos
- **404** - Recurso no encontrado
- **500** - Error interno del servidor

## 👨‍💻 Autor

STALIN ANRANGO
