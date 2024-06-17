document.querySelector('.menu-toggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-250px';
    }
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.right = '-250px';
});

let currentSlide = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = carouselInner.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    var slideMenu = document.querySelector('.slide-menu');
    if (slideMenu.style.display === 'block') {
        slideMenu.style.display = 'none';
    } else {
        slideMenu.style.display = 'block';
    }
});
