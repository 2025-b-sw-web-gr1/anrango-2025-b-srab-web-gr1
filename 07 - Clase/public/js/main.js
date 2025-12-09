// Efectos visuales y animaciones adicionales

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Catálogo Tecnológico 2085 - Iniciado');
    
    // Efecto de aparición progresiva para las tarjetas
    const cards = document.querySelectorAll('.invento-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Efecto de brillo en hover sobre el año
    const yearBadge = document.querySelector('.year-badge');
    if (yearBadge) {
        yearBadge.addEventListener('mouseenter', () => {
            yearBadge.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        yearBadge.addEventListener('mouseleave', () => {
            yearBadge.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Contador animado para stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = element.textContent;
        
        // Si es un número, animar
        if (!isNaN(target)) {
            const targetNum = parseInt(target);
            let current = 0;
            const increment = targetNum / 50;
            const duration = 1500;
            const stepTime = duration / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNum) {
                    element.textContent = targetNum;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, stepTime);
        }
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Efecto de partículas al hacer clic en iconos de inventos
    const inventoIcons = document.querySelectorAll('.invento-icon');
    
    inventoIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            createParticleEffect(e.clientX, e.clientY);
        });
    });
    
    function createParticleEffect(x, y) {
        const colors = ['#00d9ff', '#ff00ff', '#00ff88'];
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.transition = 'all 0.8s ease-out';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 100;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;
            
            setTimeout(() => {
                particle.style.transform = `translate(${dx}px, ${dy}px)`;
                particle.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                particle.remove();
            }, 800);
        }
    }
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✨ Efectos cargados correctamente');
});
