const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Página de Inicio',
        message: 'Bienvenido a nuestra aplicación'
    });
});

// Ruta para la página del gatito
app.get('/gatito', (req, res) => {
    res.render('gatito', {
        title: 'Mi Gatito',
        message: '¡Mira este adorable gatito!'
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});