// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}




document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".typed-name");
    const nameText = "Pradita Utama";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            nameElement.textContent = nameText.substring(0, index);
            index--;

            if (index < 0) {
                isDeleting = false;
                setTimeout(typeEffect, 2000);
                return;
            }
        } else {
            nameElement.textContent = nameText.substring(0, index + 1);
            index++;

            if (index === nameText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        }

        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }

    typeEffect();
});
