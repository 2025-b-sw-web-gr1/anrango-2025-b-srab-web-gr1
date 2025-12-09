const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos de inventos futuristas del año 2085
const inventos = [
  {
    id: 1,
    nombre: 'NeuroSync Implant',
    descripcion: 'Implante cerebral que sincroniza tu mente con dispositivos cuánticos',
    funcionamiento: 'Nanochips biónicos se integran con las neuronas del córtex prefrontal, creando una interfaz neural directa. Utiliza señales bioeléctricas amplificadas por cristales de grafeno modificado genéticamente.',
    utilidad: 'Permite controlar cualquier dispositivo con el pensamiento, compartir recuerdos en tiempo real, acceder a bibliotecas de conocimiento universal instantáneamente, y comunicarse telepáticamente con otros usuarios.',
    icono: '🧠'
  },
  {
    id: 2,
    nombre: 'ChronoFold Capsule',
    descripcion: 'Cápsula de crioestasis con manipulación temporal limitada',
    funcionamiento: 'Genera un campo de distorsión temporal usando antimateria controlada y cristales de tiempo cuántico. El usuario entra en suspensión criogénica mientras el tiempo exterior fluye a velocidad acelerada.',
    utilidad: 'Viajes espaciales de larga distancia, tratamientos médicos que requieren esperar décadas por curas, inversiones a muy largo plazo, o simplemente saltar períodos históricos indeseables.',
    icono: '⏳'
  },
  {
    id: 3,
    nombre: 'BioForge 3D Printer',
    descripcion: 'Impresora molecular capaz de crear órganos y tejidos vivos',
    funcionamiento: 'Utiliza células madre pluripotentes guiadas por inteligencia artificial biomédica. Los láseres ultravioleta plasman estructuras celulares capa por capa siguiendo mapas genéticos personalizados.',
    utilidad: 'Elimina listas de espera para trasplantes, crea órganos de reemplazo sin rechazo inmunológico, repara tejidos dañados in situ, e incluso permite mejoras biológicas personalizadas.',
    icono: '🧬'
  },
  {
    id: 4,
    nombre: 'AtmoSphere Purifier',
    descripcion: 'Torre de purificación atmosférica con nanotecnología autoreplicante',
    funcionamiento: 'Nanobots atmosféricos capturan CO2, metano y contaminantes, convirtiéndolos en oxígeno puro y compuestos inertes. Se autorreplican usando energía solar y materia ambiental.',
    utilidad: 'Reversión del cambio climático, terraformación de colonias espaciales, creación de microclimas personalizados, y purificación de zonas industriales contaminadas.',
    icono: '🌍'
  },
  {
    id: 5,
    nombre: 'Quantum Replicator',
    descripcion: 'Replicador cuántico de materia a partir de energía pura',
    funcionamiento: 'Convierte energía en masa mediante ecuaciones de Einstein inversas, estructurando átomos según plantillas cuánticas almacenadas. Usa fusión fría como fuente energética.',
    utilidad: 'Producción instantánea de alimentos, herramientas, medicamentos y objetos cotidianos. Elimina escasez de recursos, cadenas de suministro, y necesidad de manufactura tradicional.',
    icono: '⚛️'
  }
];

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Catálogo Tecnológico 2085',
    subtitulo: 'Innovaciones que transformarán la humanidad',
    anio: 2085,
    inventos: inventos,
    totalInventos: inventos.length
  });
});

// Ruta para inventos individuales
app.get('/invento/:id', (req, res) => {
  const invento = inventos.find(i => i.id === parseInt(req.params.id));
  if (invento) {
    res.render('detalle', {
      invento: invento,
      layout: 'main'
    });
  } else {
    res.status(404).send('Invento no encontrado');
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
  console.log(`📡 Motor de renderizado: Handlebars`);
  console.log(`🔮 Catálogo Tecnológico del año ${inventos[0] ? '2085' : 'Futuro'}`);
});
