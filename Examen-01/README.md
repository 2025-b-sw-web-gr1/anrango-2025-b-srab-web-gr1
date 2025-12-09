# Examen 01 - Documentación OpenAPI de la API JSONPlaceholder

## 1. Introducción Teórica

### ¿Por qué documentar APIs?

La documentación de APIs es fundamental para el desarrollo de software moderno. Una API bien documentada permite que los desarrolladores comprendan rápidamente cómo interactuar con los servicios, qué parámetros enviar, qué respuestas esperar y cómo manejar errores. Sin documentación clara, los equipos pierden tiempo investigando mediante prueba y error, aumentan los bugs por uso incorrecto, y la adopción de la API disminuye significativamente. Una buena documentación actúa como contrato entre el backend y el frontend, facilitando el trabajo en paralelo y reduciendo la fricción en la integración.

### ¿Qué es Swagger/OpenAPI?

**OpenAPI** (anteriormente conocido como Swagger) es una especificación estándar para describir APIs REST de manera formal y legible tanto por humanos como por máquinas. Define la estructura de los endpoints, parámetros, tipos de datos, autenticación y respuestas esperadas en formato YAML o JSON. **Swagger Editor** es una herramienta web que permite escribir y validar especificaciones OpenAPI en tiempo real, mientras que **Swagger UI** genera automáticamente una interfaz interactiva donde se pueden probar los endpoints directamente desde el navegador. Esto convierte la documentación en una herramienta viva y ejecutable, no solo un documento estático.

## 2. Objetivo del Ejercicio

El objetivo de este ejercicio es documentar mediante OpenAPI 3.0 todos los endpoints utilizados en el taller de peticiones HTTP con Bruno (clases 008-009). Se busca crear una especificación completa y válida que describa la API de JSONPlaceholder, incluyendo todos los métodos HTTP practicados (GET, POST, PUT, PATCH, DELETE), sus parámetros, cuerpos de petición y respuestas esperadas. Esta documentación servirá como referencia técnica y permitirá validar que se comprendieron correctamente los conceptos de APIs REST trabajados durante el taller.

## 3. Requisitos para Reproducir

Para visualizar y probar la documentación OpenAPI generada, necesitas:

- **Navegador web moderno** (Chrome, Firefox, Edge, Safari)
- **Swagger Editor** (herramienta online gratuita)
  - URL: [https://editor.swagger.io/](https://editor.swagger.io/)
  - No requiere instalación ni registro

Alternativamente, puedes usar extensiones de VS Code como "Swagger Viewer" o "OpenAPI Preview" para visualizar el archivo localmente.

## 4. Instrucciones para Abrir el YAML en Swagger Editor

### Opción 1: Importar archivo

1. Abrir [https://editor.swagger.io/](https://editor.swagger.io/) en tu navegador
2. En el menú superior, hacer clic en **File** → **Import file**
3. Seleccionar el archivo `swagger.yaml` desde tu computadora
4. El editor cargará automáticamente la especificación y mostrará la documentación en el panel derecho

### Opción 2: Copiar y pegar

1. Abrir [https://editor.swagger.io/](https://editor.swagger.io/)
2. Abrir el archivo `swagger.yaml` con un editor de texto
3. Seleccionar todo el contenido (Ctrl+A) y copiarlo (Ctrl+C)
4. En Swagger Editor, seleccionar todo el contenido del panel izquierdo y reemplazarlo con el contenido copiado
5. La documentación se generará automáticamente en el panel derecho

### Validación

Si no aparecen errores en rojo en el panel izquierdo, la especificación es válida. El panel derecho mostrará una interfaz interactiva con todos los endpoints documentados.

## 5. Lista de Endpoints Documentados

La especificación OpenAPI documenta los siguientes endpoints de JSONPlaceholder:

### Posts (Publicaciones)

- **GET** `/posts` - Obtener todos los posts
- **GET** `/posts/{id}` - Obtener un post específico por ID
- **POST** `/posts` - Crear un nuevo post
- **PUT** `/posts/{id}` - Actualizar completamente un post existente
- **PATCH** `/posts/{id}` - Actualizar parcialmente un post existente
- **DELETE** `/posts/{id}` - Eliminar un post

### Comments (Comentarios)

- **GET** `/comments` - Obtener todos los comentarios
- **GET** `/comments?postId={postId}` - Obtener comentarios filtrados por post (query parameter)
- **POST** `/comments` - Crear un nuevo comentario

### Albums (Álbumes)

- **GET** `/albums` - Obtener todos los álbumes
- **GET** `/albums/{id}` - Obtener un álbum específico por ID
- **POST** `/albums` - Crear un nuevo álbum

### Photos (Fotos)

- **GET** `/photos` - Obtener todas las fotos
- **GET** `/photos?albumId={albumId}` - Obtener fotos filtradas por álbum (query parameter)

### Todos (Tareas)

- **GET** `/todos` - Obtener todas las tareas
- **GET** `/todos/{id}` - Obtener una tarea específica por ID
- **POST** `/todos` - Crear una nueva tarea

### Users (Usuarios)

- **GET** `/users` - Obtener todos los usuarios
- **GET** `/users/{id}` - Obtener un usuario específico por ID

**Total: 21 endpoints documentados**

## 6. Notas y Aclaraciones

### Métodos HTTP omitidos

La documentación incluye únicamente los métodos HTTP que fueron utilizados en el taller práctico con Bruno. Se han omitido los siguientes métodos por las razones indicadas:

- **PUT/PATCH/DELETE para Comments**: No fueron practicados en el taller, aunque JSONPlaceholder los soporta
- **PUT/PATCH/DELETE para Albums**: No fueron parte del ejercicio de clase
- **PUT/PATCH/DELETE para Photos**: No aplicables, las fotos son datos estáticos en JSONPlaceholder
- **PUT/PATCH/DELETE para Todos**: Solo se practicó la creación (POST) en el taller
- **POST/PUT/PATCH/DELETE para Users**: Los usuarios son datos de solo lectura en el contexto del ejercicio

Esta selección refleja fielmente lo realizado en las clases 008-009, enfocándose en los casos de uso más comunes: lectura de datos (GET), creación (POST) y operaciones completas de CRUD solo para el recurso principal (Posts).

### Cómo probar desde Swagger UI

Una vez abierto el archivo en Swagger Editor, puedes probar los endpoints interactivamente:

1. **Expandir un endpoint**: Hacer clic en el método HTTP (GET, POST, etc.) que deseas probar
2. **Completar parámetros**:
   - Para **path parameters** (ej. `{id}`): Ingresar el valor en el campo correspondiente
   - Para **query parameters** (ej. `postId`): Ingresar el valor en el campo del parámetro
   - Para **request body** (POST/PUT/PATCH): Editar el JSON de ejemplo o escribir uno nuevo
3. **Ejecutar la petición**: Hacer clic en el botón **"Try it out"** y luego **"Execute"**
4. **Ver la respuesta**: El panel mostrará el código de estado HTTP, headers y el cuerpo de la respuesta

### Códigos de Estado HTTP Esperados

Los códigos HTTP más comunes que retorna JSONPlaceholder son:

| Código | Significado | Cuándo ocurre |
|--------|-------------|---------------|
| **200 OK** | Solicitud exitosa | GET, PUT, PATCH, DELETE cuando el recurso existe |
| **201 Created** | Recurso creado | POST al crear un nuevo post, comment, album o todo |
| **404 Not Found** | Recurso no encontrado | GET, PUT, PATCH, DELETE con un ID inexistente (ej. `/posts/9999`) |

**Nota importante sobre JSONPlaceholder**: Es una API de prueba, por lo que:

- Los datos **NO se persisten** realmente en el servidor
- Las operaciones POST retornan un ID simulado (ej. 101), pero ese recurso no existe realmente
- Las operaciones PUT/PATCH/DELETE retornan respuestas exitosas simuladas sin modificar la base de datos
- Es ideal para aprender y practicar, pero no para aplicaciones de producción

### Ejemplos de Request Body

La especificación incluye ejemplos completos de `requestBody` para cada operación POST, PUT y PATCH. Estos ejemplos se basan en las peticiones reales utilizadas en el taller con Bruno:

- **POST /posts**: Crea un post con título "foo" y contenido "bar"
- **POST /comments**: Crea un comentario de prueba con email "test@example.com"
- **POST /albums**: Crea un álbum titulado "Vacation"
- **POST /todos**: Crea una tarea "Buy milk" no completada

Todos los ejemplos son válidos y pueden ejecutarse directamente desde Swagger UI.

### Schemas de Componentes

La sección `components/schemas` define 6 modelos de datos:

1. **Post**: userId, id, title, body
2. **Comment**: postId, id, name, email, body
3. **Album**: userId, id, title
4. **Photo**: albumId, id, title, url, thumbnailUrl
5. **Todo**: userId, id, title, completed
6. **User**: id, name, username, email, address, phone, website, company

Estos schemas son reutilizados mediante referencias `$ref` en todas las respuestas, manteniendo la especificación DRY (Don't Repeat Yourself).

## 7. Instrucciones de Git

### Agregar los archivos al repositorio

Una vez generados los archivos, ejecutar los siguientes comandos desde la raíz del repositorio:

```bash
# Verificar el estado actual
git status

# Agregar la carpeta Examen-01 completa
git add Examen-01/

# Verificar que los archivos se agregaron correctamente
git status

# Crear el commit con mensaje descriptivo
git commit -m "Examen-01: Documentación OpenAPI (swagger.yaml) + README explicativo"

# Subir los cambios al repositorio remoto
git push origin main
```

### Verificación final

Después del push, verificar que los archivos estén correctamente subidos:

```bash
# Ver el último commit
git log -1

# O visitar el repositorio en GitHub/GitLab para confirmar visualmente
```

**Archivos incluidos en este commit:**

- `Examen-01/swagger.yaml` - Especificación OpenAPI 3.0 completa
- `Examen-01/README.md` - Este archivo de documentación

---

## Recursos Adicionales

- **Especificación OpenAPI**: [https://swagger.io/specification/](https://swagger.io/specification/)
- **Swagger Editor**: [https://editor.swagger.io/](https://editor.swagger.io/)
- **JSONPlaceholder**: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
- **Guía de OpenAPI 3.0**: [https://swagger.io/docs/specification/about/](https://swagger.io/docs/specification/about/)

---

**Autor**: Stalin Anrango 
**Fecha**: Diciembre 2025  
**Versión**: 1.0.0
