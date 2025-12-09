# Taller Clase 07 - Motores de Renderizado Web

## Identificación

- **Autor:** Stalin Anrango
- **Materia:** Aplicaciones Web
- **Clase:** 07 - Motores de Renderizado Web
- **Periodo:** 2025-B SW Web GR1
- **Fecha:** Diciembre 8, 2025

---

## Motor Elegido

### Nombre Completo
**Handlebars.js** (específicamente `express-handlebars` para Node.js)

### Lenguaje donde se usa
**Node.js / JavaScript** (servidor)

Handlebars es un motor de plantillas que funciona tanto en el lado del servidor (Node.js) como en el cliente (navegador), aunque en este proyecto se usa exclusivamente en el servidor con Express.

### Justificación de Elección

Elegí **Handlebars** por las siguientes razones:

1. **Lógica Clara y Separada**: Handlebars mantiene una separación estricta entre la lógica y la presentación. No permite código JavaScript arbitrario en las plantillas, lo que fuerza buenas prácticas.

2. **Sintaxis Intuitiva**: Usa la sintaxis de "bigotes" `{{variable}}` que es muy legible y fácil de entender, incluso para desarrolladores que no están familiarizados con el motor.

3. **Sistema de Helpers**: Permite crear funciones auxiliares (helpers) reutilizables para operaciones comunes sin contaminar las plantillas con lógica compleja.

4. **Partials y Layouts**: Soporte nativo para componentes reutilizables (partials) y plantillas base (layouts), facilitando el desarrollo modular.

5. **Amplia Adopción**: Es uno de los motores más populares en el ecosistema Node.js, con excelente documentación y comunidad activa.

6. **Rendimiento**: Es más rápido que EJS en la mayoría de casos porque precompila las plantillas.

---

## Configuración

### Instalación

**Paso 1:** Inicializar proyecto Node.js
```bash
npm init -y
```

**Paso 2:** Instalar dependencias necesarias
```bash
npm install express express-handlebars
```

**Paso 3:** Instalar dependencia de desarrollo (opcional)
```bash
npm install --save-dev nodemon
```

### Setup Mínimo

**Configuración en `server.js`:**

```javascript
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',                          // Layout por defecto
  layoutsDir: path.join(__dirname, 'views/layouts'),  // Carpeta de layouts
  partialsDir: path.join(__dirname, 'views/partials') // Carpeta de partials
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
```

### Dependencias Usadas

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `express` | ^4.18.2 | Framework web para Node.js |
| `express-handlebars` | ^7.1.2 | Motor de plantillas Handlebars para Express |
| `nodemon` | ^3.0.2 | (Dev) Reinicio automático del servidor |

### Arquitectura de Archivos

```
07-Clase/
├── server.js                 # Servidor Express con configuración de Handlebars
├── package.json              # Dependencias y scripts
├── views/                    # Plantillas Handlebars
│   ├── layouts/              # Layouts principales
│   │   └── main.handlebars   # Layout base con estructura HTML
│   ├── partials/             # Componentes reutilizables
│   │   └── invento-card.handlebars
│   └── index.handlebars      # Vista principal
├── public/                   # Archivos estáticos
│   ├── css/
│   │   └── styles.css        # Estilos CSS personalizados
│   └── js/
│       └── main.js           # JavaScript del cliente
```

---

## Uso

### Sintaxis del Motor

#### 1. Variables Simples
```handlebars
<h1>{{titulo}}</h1>
<p>{{descripcion}}</p>
```

#### 2. Iteración con `{{#each}}`
```handlebars
{{#each inventos}}
    <div class="card">
        <h3>{{nombre}}</h3>
        <p>{{descripcion}}</p>
    </div>
{{/each}}
```

#### 3. Condicionales con `{{#if}}`
```handlebars
{{#if usuario}}
    <p>Bienvenido, {{usuario.nombre}}</p>
{{else}}
    <p>Por favor, inicia sesión</p>
{{/if}}
```

#### 4. Partials (Componentes)
```handlebars
{{> invento-card}}
```

#### 5. Layouts
En el layout (`main.handlebars`):
```handlebars
<!DOCTYPE html>
<html>
<head>
    <title>{{titulo}}</title>
</head>
<body>
    {{{body}}}  <!-- Triple llaves para no escapar HTML -->
</body>
</html>
```

### Cómo Inyecta Datos

Desde el servidor (Node.js/Express):

```javascript
app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Catálogo Tecnológico 2085',
    subtitulo: 'Innovaciones del futuro',
    anio: 2085,
    inventos: [
      { nombre: 'NeuroSync', descripcion: '...' },
      { nombre: 'ChronoFold', descripcion: '...' }
    ]
  });
});
```

Los datos se pasan como segundo argumento del método `render()`. Handlebars recibe este objeto y lo hace disponible en la plantilla.

### Cómo se Renderiza

**Proceso de renderizado:**

1. **Cliente hace petición** → `GET /`
2. **Express ejecuta el controlador** → `res.render('index', { datos })`
3. **Handlebars procesa:**
   - Carga el layout `main.handlebars`
   - Carga la vista `index.handlebars`
   - Carga los partials necesarios (ej: `invento-card.handlebars`)
   - Sustituye las variables `{{variable}}` con los datos reales
   - Ejecuta helpers y bloques (`{{#each}}`, `{{#if}}`)
4. **Genera HTML completo**
5. **Express envía HTML al cliente**

**Ejemplo de renderizado:**

Plantilla:
```handlebars
<h1>{{titulo}}</h1>
{{#each items}}
    <p>{{nombre}}</p>
{{/each}}
```

Datos:
```javascript
{
  titulo: 'Inventos',
  items: [
    { nombre: 'Item 1' },
    { nombre: 'Item 2' }
  ]
}
```

HTML generado:
```html
<h1>Inventos</h1>
<p>Item 1</p>
<p>Item 2</p>
```

---

## Comparación con EJS

### Diferencias Claras

| Aspecto | Handlebars | EJS |
|---------|-----------|-----|
| **Sintaxis** | `{{variable}}` | `<%= variable %>` |
| **Lógica en plantillas** | Limitada (solo helpers) | JavaScript completo |
| **Filosofía** | Logic-less (sin lógica) | Logic-full (con lógica) |
| **Layouts nativos** | ✅ Sí | ❌ No (requiere includes) |
| **Partials** | ✅ Fácil `{{> partial}}` | ⚠️ `<%- include('partial') %>` |
| **Precompilación** | ✅ Sí | ❌ No |
| **Curva de aprendizaje** | Más empinada | Más simple |
| **Extensibilidad** | Helpers personalizados | Código JS directo |

### Ventajas de Handlebars frente a EJS

✅ **Separación de responsabilidades**: Handlebars fuerza a mantener la lógica en el servidor, no en las vistas. Esto resulta en código más mantenible.

✅ **Layouts nativos**: El sistema de layouts es más elegante y no requiere repetir código HTML base.

✅ **Sintaxis más limpia**: Los `{{}}` son más visuales y menos intrusivos que `<% %>`.

✅ **Prevención de errores**: Al no permitir JavaScript arbitrario, se reducen errores de lógica en las vistas.

✅ **Rendimiento**: Las plantillas precompiladas son más rápidas en producción.

✅ **Reutilización**: Los partials son más intuitivos y fáciles de usar.

### Desventajas de Handlebars frente a EJS

❌ **Menos flexible**: Si necesitas lógica compleja en la vista, Handlebars te obliga a crear helpers o mover la lógica al controlador.

❌ **Curva de aprendizaje**: Requiere aprender el sistema de helpers, mientras que EJS usa JavaScript que ya conoces.

❌ **Verbosidad en helpers**: Operaciones simples como `array.length` o formateo de fechas requieren helpers personalizados.

❌ **Debugging más difícil**: Los errores en plantillas Handlebars son menos descriptivos que en EJS.

❌ **Configuración inicial**: Requiere más setup que EJS (layouts, partials, helpers).

### Qué Resultó Positivo

1. **Organización del código**: La estructura forzada (layouts/partials/views) resultó en un proyecto muy ordenado.

2. **Mantenibilidad**: El partial `invento-card.handlebars` se puede reutilizar fácilmente y modificar en un solo lugar.

3. **Legibilidad**: Las plantillas son muy fáciles de leer, incluso para alguien que no conoce Handlebars.

4. **Iteraciones simples**: El `{{#each}}` es extremadamente claro y funciona perfectamente para listar inventos.

5. **No mezclar lógica con presentación**: Me obligó a pensar mejor en la arquitectura.

### Qué No Resultó Tan Bien

1. **Helpers para cosas simples**: Tuve que evitar operaciones que en EJS serían triviales (ej: `<%= items.length %>` vs crear un helper).

2. **Configuración inicial**: Tuve que configurar más archivos y carpetas que con EJS.

3. **Debugging**: Cuando hubo errores en las plantillas, los mensajes no eran tan claros.

4. **Documentación dispersa**: La documentación de `express-handlebars` está separada de la de Handlebars.js, lo que puede confundir.

---

## Valoración Final

### ¿Cuándo SÍ conviene usar Handlebars?

✅ **Proyectos con múltiples desarrolladores**: La sintaxis restrictiva evita "creatividad peligrosa" en las vistas.

✅ **Aplicaciones grandes**: Los layouts y partials escalan muy bien en proyectos complejos.

✅ **Cuando se busca separación estricta**: Si quieres forzar buenas prácticas de MVC.

✅ **Equipos con diseñadores**: La sintaxis es más amigable para personas no técnicas.

✅ **Aplicaciones con muchos componentes reutilizables**: El sistema de partials es excelente.

✅ **Proyectos de larga duración**: La mantenibilidad a largo plazo es superior.

### ¿Cuándo NO conviene usar Handlebars?

❌ **Prototipos rápidos**: EJS es más rápido de configurar y usar.

❌ **Proyectos pequeños/simples**: El overhead de configuración no se justifica.

❌ **Cuando necesitas lógica compleja en vistas**: Si realmente necesitas JavaScript en las plantillas.

❌ **Desarrollador único**: La flexibilidad de EJS puede ser más práctica.

❌ **Curva de aprendizaje crítica**: Si el equipo necesita producir rápido sin aprender nuevas herramientas.

❌ **Migraciones desde EJS**: El esfuerzo de migración puede no valer la pena.

### Conclusión Personal

Handlebars es una excelente opción cuando se prioriza la **arquitectura limpia** y la **mantenibilidad** sobre la **velocidad de desarrollo inicial**. Para este taller fue ideal porque me forzó a pensar en la estructura del proyecto y a separar responsabilidades correctamente.

Sin embargo, para proyectos personales pequeños o prototipos rápidos, probablemente seguiría usando EJS por su simplicidad y flexibilidad.

**Calificación: 8.5/10**

---

## Ejecución del Proyecto

### Instalación
```bash
npm install
```

### Modo Desarrollo
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

### Acceso
Abrir navegador en: `http://localhost:3000`

---

## Referencias

- Documentación oficial Handlebars: https://handlebarsjs.com/
- express-handlebars en npm: https://www.npmjs.com/package/express-handlebars
- Presentación de clase: https://app.presentations.ai/view/821Www
