import './style.css'
import gatitoImage from './assets/gatito.jpg'

// Clase principal del SPA
class SpaGatito {
  constructor() {
    this.routes = {
      '/': this.renderHomePage,
      '/gatito': this.renderGatitoPage
    }
    
    this.init()
  }
  
  init() {
    // Configurar navegación
    this.setupNavigation()
    
    // Manejar ruta inicial
    this.handleRoute()
    
    // Escuchar cambios en el hash
    window.addEventListener('hashchange', () => this.handleRoute())
  }
  
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link')
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const route = link.dataset.route
        window.location.hash = route
        this.updateActiveNav(route)
      })
    })
  }
  
  updateActiveNav(currentRoute) {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      if (link.dataset.route === currentRoute) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
  
  handleRoute() {
    const hash = window.location.hash.slice(1) || '/'
    const route = this.routes[hash] || this.routes['/']
    
    // Actualizar navegación activa
    this.updateActiveNav(hash)
    
    // Renderizar contenido
    const content = document.getElementById('content')
    content.innerHTML = '<div class="loading">Cargando...</div>'
    
    // Simular una pequeña carga para efecto visual
    setTimeout(() => {
      content.innerHTML = route.call(this)
      content.firstElementChild.classList.add('fade-in')
    }, 200)
  }
  
  renderHomePage() {
    return `
      <div class="home-page">
        <h1 class="slide-in">🏠 Bienvenido al SPA Gatito</h1>
        <p>Una aplicación de una sola página (SPA) construida con Vite y Vanilla JavaScript</p>
        
        <div class="welcome-card">
          <h2>¿Qué es un SPA? 🤔</h2>
          <p>Una Single Page Application (SPA) es una aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido según la interacción del usuario, sin necesidad de recargar la página completa.</p>
          
          <h3>Características de este SPA:</h3>
          <ul style="text-align: left; max-width: 600px; margin: 1rem auto;">
            <li>✅ Navegación sin recargas de página</li>
            <li>✅ Rutas manejadas con hash (#)</li>
            <li>✅ Contenido dinámico</li>
            <li>✅ Transiciones suaves</li>
            <li>✅ Diseño responsive</li>
          </ul>
        </div>
        
        <button class="btn" onclick="window.location.hash='/gatito'">
          🐱 ¡Ver el Gatito Adorable!
        </button>
        
        <div style="margin-top: 2rem; padding: 1rem; background: rgba(102, 126, 234, 0.1); border-radius: 10px;">
          <h3>🚀 Construido con:</h3>
          <p><strong>Vite</strong> - Build tool ultrarrápido</p>
          <p><strong>Vanilla JavaScript</strong> - Sin frameworks, puro JS</p>
          <p><strong>CSS3</strong> - Gradientes y animaciones modernas</p>
        </div>
      </div>
    `
  }
  
  renderGatitoPage() {
    return `
      <div class="gatito-page">
        <h1 class="slide-in">🐱 ¡Mi Gatito Adorable!</h1>
        <p>Conoce a nuestro protagonista felino</p>
        
        <div class="gatito-container">
          <img src="${gatitoImage}" alt="Adorable gatito" class="gatito-image" onclick="this.style.transform = this.style.transform ? '' : 'scale(1.1) rotate(5deg)'">
          <p><small>💡 Haz clic en la imagen para una sorpresa</small></p>
        </div>
        
        <div class="gatito-info">
          <h2>🎯 Datos Curiosos sobre Gatos</h2>
          <p>Los gatos son criaturas fascinantes con habilidades increíbles y personalidades únicas.</p>
        </div>
        
        <div class="gatito-stats">
          <div class="stat-card">
            <h3>🔊 Sonidos</h3>
            <p>Los gatos pueden hacer más de <strong>100 sonidos vocales</strong> diferentes</p>
          </div>
          
          <div class="stat-card">
            <h3>😴 Sueño</h3>
            <p>Duermen entre <strong>12-16 horas</strong> al día</p>
          </div>
          
          <div class="stat-card">
            <h3>👁️ Visión</h3>
            <p>Pueden ver en la oscuridad <strong>6 veces mejor</strong> que los humanos</p>
          </div>
          
          <div class="stat-card">
            <h3>🏃‍♂️ Velocidad</h3>
            <p>Pueden correr hasta <strong>48 km/h</strong> en distancias cortas</p>
          </div>
        </div>
        
        <div style="margin: 2rem 0;">
          <button class="btn" onclick="alert('¡Miau! 🐱')">
            🎵 Hacer Miau
          </button>
          
          <button class="btn" onclick="window.location.hash='/'">
            🏠 Volver al Inicio
          </button>
        </div>
        
        <div style="background: rgba(253, 121, 168, 0.1); padding: 1.5rem; border-radius: 10px; margin-top: 2rem;">
          <p><strong>💝 Mensaje del desarrollador:</strong></p>
          <p>Este SPA demuestra cómo crear aplicaciones web modernas y reactivas usando solo Vanilla JavaScript. ¡Sin necesidad de frameworks pesados!</p>
        </div>
      </div>
    `
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new SpaGatito()
})
