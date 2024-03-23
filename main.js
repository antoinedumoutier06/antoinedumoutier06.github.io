var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.0016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});
function toggleTheme() {
    const body = document.body;
    const btn = document.querySelector('.btn');
    const image = document.querySelector('.image4');
    const heroText = document.querySelector('.hero-text h1');
    const heroTitle = document.querySelector('.hero-text h1');
    const heroTitle2 = document.querySelector('.created-by p');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️';
        image.src = 'img/liner_black.png';
        btn.style.backgroundImage = 'linear-gradient(132deg, #0b2fc0 0%, #e95f7a 100%)';
        heroTitle.style.backgroundImage = 'linear-gradient(132deg, #0b2fc0 0%, #e95f7a 100%)';
        heroText.style.backgroundImage = 'linear-gradient(132deg, #0b2fc0 0%, #e95f7a 100%)';
        heroTitle2.style.backgroundImage = 'linear-gradient(132deg, #0b2fc0 0%, #e95f7a 100%)';
    } else {
        btn.textContent = '🌙';
        image.src = 'img/liner_white.png';
        btn.style.backgroundImage = 'linear-gradient(132deg, #f4d03f 0%, #16a085 100%)';
        heroTitle.style.backgroundImage = 'linear-gradient(132deg, #f4d03f 0%, #16a085 100%)';
        heroText.style.backgroundImage = 'linear-gradient(132deg, #f4d03f 0%, #16a085 100%)';
        heroTitle2.style.backgroundImage = 'linear-gradient(132deg, #f4d03f 0%, #16a085 100%)';
    }
}
document.querySelector('.font3').addEventListener('click', function(event) {
    event.preventDefault();

    const targetSection = document.getElementById('projects');
    const targetOffset = targetSection.offsetTop;
    const duration = 1500;
    const start = window.pageYOffset;
    const distance = targetOffset - start;
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, start + distance * scrollProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
});
document.querySelector('.font2').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
