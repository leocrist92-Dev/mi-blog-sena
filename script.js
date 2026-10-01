document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto Máquina de escribir digital
    const textToType = "Welcome to my English Learning Blog";
    const typewriterElement = document.getElementById("typewriter");
    if(typewriterElement) {
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typewriterElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Alta velocidad
            }
        }
        typeWriter();
    }

    // 2. Animación al hacer Scroll (Fade-in up)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    // 3. Efecto Paralaje 3D (Tilt Effect) en tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10; // Inclinación
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
});