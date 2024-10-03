let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Remove a classe "active" do slide atual
    slides[currentSlide].classList.remove('active');

    // Atualiza o índice do slide atual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Adiciona a classe "active" ao novo slide
    slides[currentSlide].classList.add('active');

    // Atualiza a posição do carousel
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}