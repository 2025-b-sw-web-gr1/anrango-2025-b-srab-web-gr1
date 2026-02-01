# Proyecto 002 - API RESTful con Documentación Swagger# Proyecto 002 - API RESTful con Documentación Swagger# Examen Web 002 - API RESTful Brands y Models



API RESTful implementada en NestJS con TypeORM, SQLite y documentación automática con Swagger/OpenAPI para gestión de marcas y modelos de celulares.



## 📋 DescripciónAPI RESTful implementada en NestJS con TypeORM, SQLite y documentación automática con Swagger/OpenAPI para gestión de marcas y modelos de celulares.API RESTful implementada en NestJS con TypeORM y SQLite que gestiona marcas y modelos de celulares con relación 1 a muchos.



Este proyecto extiende el **Examen-Web-001** agregando documentación completa de endpoints usando **Swagger (OpenAPI)**.



### Entidades## 📋 Descripción## 📋 Descripción



- **Brand (Marca)**: Representa fabricantes de celulares

- **Model (Modelo)**: Representa modelos específicos de celulares

Este proyecto extiende el **Examen-Web-001** agregando documentación completa de endpoints usando **Swagger (OpenAPI)**.Este proyecto implementa un sistema de gestión con dos entidades principales:

### Relación 1 a Muchos



- Una **Marca** puede tener **muchos Modelos**

- Un **Modelo** pertenece a **una única Marca**### Entidades- **Brand (Marca)**: Representa fabricantes de celulares



## 🚀 Tecnologías- **Model (Modelo)**: Representa modelos específicos de celulares



- **NestJS** - Framework de Node.js- **Brand (Marca)**: Representa fabricantes de celulares

- **TypeORM** - ORM para TypeScript/JavaScript

- **SQLite** - Base de datos embebida- **Model (Modelo)**: Representa modelos específicos de celulares### Relación 1 a Muchos

- **Swagger/OpenAPI** - Documentación automática de APIs

- **TypeScript** - Lenguaje de programación



## 📦 Instalación### Relación 1 a Muchos- Una **Marca** puede tener **muchos Modelos**



### 1. Navegar al directorio del proyecto- Un **Modelo** pertenece a **una única Marca**



```bash- Una **Marca** puede tener **muchos Modelos**

cd Proyecto-002

```- Un **Modelo** pertenece a **una única Marca**## 🚀 Tecnologías



### 2. Instalar dependencias



```bash## 🚀 Tecnologías- **NestJS** - Framework de Node.js

npm install

```- **TypeORM** - ORM para TypeScript/JavaScript



Las dependencias necesarias incluyen:- **NestJS** - Framework de Node.js- **SQLite** - Base de datos embebida



- `@nestjs/swagger` - Integración de Swagger con NestJS- **TypeORM** - ORM para TypeScript/JavaScript- **TypeScript** - Lenguaje de programación

- `swagger-ui-express` - UI de Swagger

- `@nestjs/typeorm` - Integración de TypeORM con NestJS- **SQLite** - Base de datos embebida

- `typeorm` - ORM para base de datos

- `sqlite3` - Driver de SQLite- **Swagger/OpenAPI** - Documentación automática de APIs## 📦 Instalación



## ▶️ Ejecución- **TypeScript** - Lenguaje de programación



### Modo desarrollo (con hot-reload)### 1. Clonar el repositorio



```bash## 📦 Instalación

npm run start:dev

``````bash



### Modo producción### 1. Navegar al directorio del proyectocd Examen-Web-001



```bash```

npm run build

npm run start:prod```bash

```

cd Proyecto-002### 2. Instalar dependencias

El servidor se iniciará en `http://localhost:3000`

```

## 📚 Acceso a la Documentación Swagger

```bash

Una vez que el servidor esté corriendo, accede a la documentación interactiva de Swagger:

### 2. Instalar dependenciasnpm install

🔗 **http://localhost:3000/api**

```

Desde la interfaz de Swagger podrás:

```bash

- Ver todos los endpoints disponibles

- Probar los endpoints directamente desde el navegadornpm installLas dependencias necesarias incluyen:

- Ver los esquemas de datos (DTOs)

- Ver ejemplos de request y response```- `@nestjs/typeorm` - Integración de TypeORM con NestJS

- Ejecutar peticiones sin necesidad de herramientas externas

- `typeorm` - ORM para base de datos

## 📡 Endpoints Documentados

Las dependencias necesarias incluyen:- `sqlite3` - Driver de SQLite

### Brands (Marcas)



| Método | Endpoint | Descripción |

|--------|----------|-------------|- `@nestjs/swagger` - Integración de Swagger con NestJS## ▶️ Ejecución

| GET | `/brands` | Obtener todas las marcas |

| GET | `/brands/:id` | Obtener una marca por ID |- `swagger-ui-express` - UI de Swagger

| POST | `/brands` | Crear una marca |

| PUT | `/brands/:id` | Actualizar una marca |- `@nestjs/typeorm` - Integración de TypeORM con NestJS```bash

| DELETE | `/brands/:id` | Eliminar una marca |

| GET | `/brands/:id/models` | Obtener modelos de una marca |- `typeorm` - ORM para base de datosnpm run start



### Models (Modelos)- `sqlite3` - Driver de SQLite```



| Método | Endpoint | Descripción |

|--------|----------|-------------|

| GET | `/models` | Obtener todos los modelos |## ▶️ Ejecución### Modo desarrollo (con hot-reload)

| GET | `/models/:id` | Obtener un modelo por ID |

| POST | `/models` | Crear un modelo |

| PUT | `/models/:id` | Actualizar un modelo |

| DELETE | `/models/:id` | Eliminar un modelo |### Modo desarrollo (con hot-reload)```bash



## 📝 Ejemplos de Usonpm run start:dev



### Usando cURL```bash```



#### Crear una marcanpm run start:dev



```bash```### Modo producción

curl -X POST http://localhost:3000/brands \

  -H "Content-Type: application/json" \

  -d '{

    "name": "Samsung",### Modo producción```bash

    "country": "Corea del Sur"

  }'npm run build

```

```bashnpm run start:prod

#### Crear un modelo

npm run build```

```bash

curl -X POST http://localhost:3000/models \npm run start:prod

  -H "Content-Type: application/json" \

  -d '{```El servidor se iniciará en `http://localhost:3000`

    "name": "Galaxy S24",

    "year": 2024,

    "brand": {

      "id": 1El servidor se iniciará en `http://localhost:3000`## 📡 Endpoints Disponibles

    }

  }'

```

## 📚 Acceso a la Documentación Swagger### Brands (Marcas)

### Usando Swagger UI



1. Abre el navegador en `http://localhost:3000/api`

2. Selecciona el endpoint que deseas probarUna vez que el servidor esté corriendo, accede a la documentación interactiva de Swagger:| Método | Endpoint | Descripción |

3. Click en "Try it out"

4. Completa los parámetros necesarios|--------|----------|-------------|

5. Click en "Execute"

6. Observa la respuesta en tiempo real🔗 **http://localhost:3000/api**| GET | `/brands` | Obtener todas las marcas |



## 🔧 Configuración de Swagger| GET | `/brands/:id` | Obtener una marca por ID |



La configuración de Swagger se encuentra en `src/main.ts`:Desde la interfaz de Swagger podrás:| POST | `/brands` | Crear una marca |



```typescript| PUT | `/brands/:id` | Actualizar una marca |

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

- Ver todos los endpoints disponibles| DELETE | `/brands/:id` | Eliminar una marca |

const config = new DocumentBuilder()

  .setTitle('API de Marcas y Modelos de Celulares')- Probar los endpoints directamente desde el navegador| GET | `/brands/:id/models` | Obtener modelos de una marca |

  .setDescription('Documentación completa de endpoints RESTful')

  .setVersion('1.0')- Ver los esquemas de datos (DTOs)

  .addTag('brands', 'Operaciones relacionadas con marcas')

  .addTag('models', 'Operaciones relacionadas con modelos')- Ver ejemplos de request y response### Models (Modelos)

  .build();

- Ejecutar peticiones sin necesidad de herramientas externas

const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api', app, document);| Método | Endpoint | Descripción |

```

## 📡 Endpoints Documentados|--------|----------|-------------|

## 📘 DTOs Documentados

| GET | `/models` | Obtener todos los modelos |

### CreateBrandDto

### Brands (Marcas)| GET | `/models/:id` | Obtener un modelo por ID |

```typescript

{| POST | `/models` | Crear un modelo |

  name: string;      // Ejemplo: "Samsung"

  country: string;   // Ejemplo: "Corea del Sur"| Método | Endpoint | Descripción || PUT | `/models/:id` | Actualizar un modelo |

}

```|--------|----------|-------------|| DELETE | `/models/:id` | Eliminar un modelo |



### CreateModelDto| GET | `/brands` | Obtener todas las marcas |



```typescript| GET | `/brands/:id` | Obtener una marca por ID |## 📝 Ejemplos de Uso

{

  name: string;      // Ejemplo: "Galaxy S24"| POST | `/brands` | Crear una marca |

  year: number;      // Ejemplo: 2024

  brand: {| PUT | `/brands/:id` | Actualizar una marca |### Crear una marca

    id: number;      // Ejemplo: 1

  }| DELETE | `/brands/:id` | Eliminar una marca |

}

```| GET | `/brands/:id/models` | Obtener modelos de una marca |```bash



## 🎯 Decoradores Utilizadoscurl -X POST http://localhost:3000/brands \



### En Controladores### Models (Modelos)  -H "Content-Type: application/json" \



- `@ApiTags()` - Agrupa endpoints por categoría  -d '{

- `@ApiOperation()` - Describe la operación del endpoint

- `@ApiResponse()` - Documenta posibles respuestas| Método | Endpoint | Descripción |    "name": "Samsung",

- `@ApiParam()` - Documenta parámetros de ruta

- `@ApiBody()` - Documenta el body del request|--------|----------|-------------|    "country": "Corea del Sur"



### En DTOs| GET | `/models` | Obtener todos los modelos |  }'



- `@ApiProperty()` - Documenta cada propiedad del DTO| GET | `/models/:id` | Obtener un modelo por ID |```



**Ejemplo en controlador:**| POST | `/models` | Crear un modelo |



```typescript| PUT | `/models/:id` | Actualizar un modelo |**Respuesta:**

@ApiTags('brands')

@Controller('brands')| DELETE | `/models/:id` | Eliminar un modelo |

export class BrandsController {

  @Get()```json

  @ApiOperation({ summary: 'Obtener todas las marcas' })

  @ApiResponse({ status: 200, description: 'Lista de marcas' })## 📝 Ejemplos de Uso{

  async findAll() {

    // ...  "statusCode": 201,

  }

}### Usando cURL  "data": {

```

    "id": 1,

**Ejemplo en DTO:**

#### Crear una marca    "name": "Samsung",

```typescript

export class CreateBrandDto {    "country": "Corea del Sur",

  @ApiProperty({ example: 'Samsung' })

  name: string;```bash    "models": []

  

  @ApiProperty({ example: 'Corea del Sur' })curl -X POST http://localhost:3000/brands \  }

  country: string;

}  -H "Content-Type: application/json" \}

```

  -d '{```

## 📁 Estructura del Proyecto

    "name": "Samsung",

```

Proyecto-002/    "country": "Corea del Sur"### Obtener todas las marcas

├── bruno/                  # Colección de pruebas Bruno

├── src/  }'

│   ├── brands/            # Módulo de marcas

│   │   ├── dto/           # DTOs documentados``````bash

│   │   │   ├── create-brand.dto.ts

│   │   │   └── update-brand.dto.tscurl http://localhost:3000/brands

│   │   ├── brand.entity.ts

│   │   ├── brands.controller.ts  # Con decoradores Swagger#### Crear un modelo```

│   │   ├── brands.service.ts

│   │   └── brands.module.ts

│   ├── models/            # Módulo de modelos

│   │   ├── dto/           # DTOs documentados```bash**Respuesta:**

│   │   │   ├── create-model.dto.ts

│   │   │   └── update-model.dto.tscurl -X POST http://localhost:3000/models \

│   │   ├── model.entity.ts

│   │   ├── models.controller.ts  # Con decoradores Swagger  -H "Content-Type: application/json" \```json

│   │   ├── models.service.ts

│   │   └── models.module.ts  -d '{{

│   ├── app.module.ts      # Módulo principal con TypeORM

│   └── main.ts            # Configuración de Swagger    "name": "Galaxy S24",  "statusCode": 200,

├── package.json

├── tsconfig.json    "year": 2024,  "data": [

└── README.md

```    "brand": {    {



## 🗄️ Base de Datos      "id": 1      "id": 1,



La configuración de SQLite se encuentra en `src/app.module.ts`:    }      "name": "Samsung",



```typescript  }'      "country": "Corea del Sur",

TypeOrmModule.forRoot({

  type: 'sqlite',```      "models": [...]

  database: 'db.sqlite',

  entities: [Brand, Model],    }

  synchronize: true, // ⚠️ Solo para desarrollo

})### Usando Swagger UI  ]

```

}

## ⚠️ Notas Importantes

1. Abre el navegador en `http://localhost:3000/api````

1. **synchronize: true** - Esta opción está activada para desarrollo. En producción debe estar en `false` y usar migraciones.

2. Selecciona el endpoint que deseas probar

2. **Base de datos** - El archivo `db.sqlite` no está incluido en el repositorio. Se creará automáticamente al iniciar la aplicación.

3. Click en "Try it out"### Obtener una marca por ID

3. **CORS** - Está habilitado por defecto para permitir peticiones desde cualquier origen.

4. Completa los parámetros necesarios

4. **Swagger UI** - La documentación interactiva está disponible SOLO cuando el servidor está corriendo.

5. Click en "Execute"```bash

## 🎓 Diferencias con Examen-Web-001

6. Observa la respuesta en tiempo realcurl http://localhost:3000/brands/1

### Nuevas Dependencias

```

- `@nestjs/swagger`

- `swagger-ui-express`## 🔧 Configuración de Swagger



### Nuevos Archivos**Respuesta:**



- DTOs documentados en `src/brands/dto/` y `src/models/dto/`La configuración de Swagger se encuentra en `src/main.ts`:



### Archivos Modificados```json



- `src/main.ts` - Configuración de Swagger```typescript{

- `src/brands/brands.controller.ts` - Decoradores de Swagger

- `src/models/models.controller.ts` - Decoradores de Swaggerimport { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';  "statusCode": 200,

- `package.json` - Dependencias de Swagger

  "data": {

## 📊 Respuestas HTTP Documentadas

const config = new DocumentBuilder()    "id": 1,

Cada endpoint está documentado con sus posibles respuestas:

  .setTitle('API de Marcas y Modelos de Celulares')    "name": "Samsung",

- **200** - Operación exitosa

- **201** - Recurso creado exitosamente  .setDescription('Documentación completa de endpoints RESTful')    "country": "Corea del Sur",

- **204** - Recurso eliminado (sin contenido)

- **400** - Datos inválidos  .setVersion('1.0')    "models": [...]

- **404** - Recurso no encontrado

- **500** - Error interno del servidor  .addTag('brands', 'Operaciones relacionadas con marcas')  }



## 👨‍💻 Autor  .addTag('models', 'Operaciones relacionadas con modelos')}



Proyecto desarrollado para el Proyecto 002 - Documentación con Swagger  .build();```



## 📄 Licencia



UNLICENSEDconst document = SwaggerModule.createDocument(app, config);### Actualizar una marca


SwaggerModule.setup('api', app, document);

``````bash

curl -X PUT http://localhost:3000/brands/1 \

## 📘 DTOs Documentados  -H "Content-Type: application/json" \

  -d '{

### CreateBrandDto    "name": "Samsung Electronics",

    "country": "Corea del Sur"

```typescript  }'

{```

  name: string;      // Ejemplo: "Samsung"

  country: string;   // Ejemplo: "Corea del Sur"**Respuesta:**

}

``````json

{

### CreateModelDto  "statusCode": 200,

  "data": {

```typescript    "id": 1,

{    "name": "Samsung Electronics",

  name: string;      // Ejemplo: "Galaxy S24"    "country": "Corea del Sur"

  year: number;      // Ejemplo: 2024  }

  brand: {}

    id: number;      // Ejemplo: 1```

  }

}### Eliminar una marca

```

```bash

## 🎯 Decoradores Utilizadoscurl -X DELETE http://localhost:3000/brands/1

```

### En Controladores

**Respuesta:**

- `@ApiTags()` - Agrupa endpoints por categoría

- `@ApiOperation()` - Describe la operación del endpoint```json

- `@ApiResponse()` - Documenta posibles respuestas{

- `@ApiParam()` - Documenta parámetros de ruta  "statusCode": 204

- `@ApiBody()` - Documenta el body del request}

```

### En DTOs

### Crear un modelo

- `@ApiProperty()` - Documenta cada propiedad del DTO

```bash

**Ejemplo en controlador:**curl -X POST http://localhost:3000/models \

  -H "Content-Type: application/json" \

```typescript  -d '{

@ApiTags('brands')    "name": "Galaxy S24",

@Controller('brands')    "year": 2024,

export class BrandsController {    "brand": {

  @Get()      "id": 1

  @ApiOperation({ summary: 'Obtener todas las marcas' })    }

  @ApiResponse({ status: 200, description: 'Lista de marcas' })  }'

  async findAll() {```

    // ...

  }**Respuesta:**

}

``````json

{

**Ejemplo en DTO:**  "statusCode": 201,

  "data": {

```typescript    "id": 1,

export class CreateBrandDto {    "name": "Galaxy S24",

  @ApiProperty({ example: 'Samsung' })    "year": 2024,

  name: string;    "brand": {

        "id": 1,

  @ApiProperty({ example: 'Corea del Sur' })      "name": "Samsung",

  country: string;      "country": "Corea del Sur"

}    }

```  }

}

## 📁 Estructura del Proyecto```



```### Obtener todos los modelos

Proyecto-002/

├── bruno/                  # Colección de pruebas Bruno```bash

├── src/curl http://localhost:3000/models

│   ├── brands/            # Módulo de marcas```

│   │   ├── dto/           # DTOs documentados

│   │   │   ├── create-brand.dto.ts**Respuesta:**

│   │   │   └── update-brand.dto.ts

│   │   ├── brand.entity.ts```json

│   │   ├── brands.controller.ts  # Con decoradores Swagger{

│   │   ├── brands.service.ts  "statusCode": 200,

│   │   └── brands.module.ts  "data": [

│   ├── models/            # Módulo de modelos    {

│   │   ├── dto/           # DTOs documentados      "id": 1,

│   │   │   ├── create-model.dto.ts      "name": "Galaxy S24",

│   │   │   └── update-model.dto.ts      "year": 2024,

│   │   ├── model.entity.ts      "brand": {

│   │   ├── models.controller.ts  # Con decoradores Swagger        "id": 1,

│   │   ├── models.service.ts        "name": "Samsung",

│   │   └── models.module.ts        "country": "Corea del Sur"

│   ├── app.module.ts      # Módulo principal con TypeORM      }

│   └── main.ts            # Configuración de Swagger    }

├── package.json  ]

├── tsconfig.json}

└── README.md```

```

### Obtener un modelo por ID

## 🗄️ Base de Datos

```bash

La configuración de SQLite se encuentra en `src/app.module.ts`:curl http://localhost:3000/models/1

```

```typescript

TypeOrmModule.forRoot({### Actualizar un modelo

  type: 'sqlite',

  database: 'db.sqlite',```bash

  entities: [Brand, Model],curl -X PUT http://localhost:3000/models/1 \

  synchronize: true, // ⚠️ Solo para desarrollo  -H "Content-Type: application/json" \

})  -d '{

```    "name": "Galaxy S24 Ultra",

    "year": 2024

## ⚠️ Notas Importantes  }'

```

1. **synchronize: true** - Esta opción está activada para desarrollo. En producción debe estar en `false` y usar migraciones.

### Eliminar un modelo

2. **Base de datos** - El archivo `db.sqlite` no está incluido en el repositorio. Se creará automáticamente al iniciar la aplicación.

```bash

3. **CORS** - Está habilitado por defecto para permitir peticiones desde cualquier origen.curl -X DELETE http://localhost:3000/models/1

```

4. **Swagger UI** - La documentación interactiva está disponible SOLO cuando el servidor está corriendo.

### Obtener modelos de una marca específica

## 🎓 Diferencias con Examen-Web-001

```bash

### Nuevas Dependenciascurl http://localhost:3000/brands/1/models

```

- `@nestjs/swagger`

- `swagger-ui-express`**Respuesta:**



### Nuevos Archivos```json

{

- DTOs documentados en `src/brands/dto/` y `src/models/dto/`  "statusCode": 200,

  "data": [

### Archivos Modificados    {

      "id": 1,

- `src/main.ts` - Configuración de Swagger      "name": "Galaxy S24",

- `src/brands/brands.controller.ts` - Decoradores de Swagger      "year": 2024

- `src/models/models.controller.ts` - Decoradores de Swagger    },

- `package.json` - Dependencias de Swagger    {

      "id": 2,

## 📊 Respuestas HTTP Documentadas      "name": "Galaxy A54",

      "year": 2023

Cada endpoint está documentado con sus posibles respuestas:    }

  ]

- **200** - Operación exitosa}

- **201** - Recurso creado exitosamente```

- **204** - Recurso eliminado (sin contenido)

- **400** - Datos inválidos## 🧪 Pruebas con Bruno

- **404** - Recurso no encontrado

- **500** - Error interno del servidorEn la carpeta `bruno/` se encuentran archivos de prueba para todos los endpoints:



## 👨‍💻 Autor- `create-brand.bru` - Crear marca

- `get-all-brands.bru` - Obtener todas las marcas

Proyecto desarrollado para el Proyecto 002 - Documentación con Swagger- `get-brand-by-id.bru` - Obtener marca por ID

- `update-brand.bru` - Actualizar marca

## 📄 Licencia- `delete-brand.bru` - Eliminar marca

- `get-models-by-brand.bru` - Obtener modelos de una marca

UNLICENSED- `create-model.bru` - Crear modelo

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

