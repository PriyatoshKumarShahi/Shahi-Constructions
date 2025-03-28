document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
 
  const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutHeading = document.getElementById("about-heading");

    function handleScroll() {
        const headingPosition = aboutHeading.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (headingPosition < screenPosition) {
            aboutHeading.classList.add("active"); // Slide & fade in
        } else {
            aboutHeading.classList.remove("active"); // Slide & fade out
        }
    }

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const projectHeading = document.getElementById("project-heading");

    function handleScroll() {
        const headingPosition = projectHeading.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (headingPosition < screenPosition) {
            projectHeading.classList.add("active"); 
        } else {
            projectHeading.classList.remove("active"); 
        }
    }

    window.addEventListener("scroll", handleScroll);
});
// document.addEventListener("DOMContentLoaded", function () {
//     const projectHeading = document.getElementById("testimonial-heading");

//     function handleScroll() {
//         const headingPosition = projectHeading.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.2;

//         if (headingPosition < screenPosition) {
//             projectHeading.classList.add("active"); 
//         } else {
//             projectHeading.classList.remove("active"); 
//         }
//     }

//     window.addEventListener("scroll", handleScroll);
// });



document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".testimonial-wrapper");
    const dotsContainer = document.querySelector(".testimonial-dots");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const cards = document.querySelectorAll(".testimonial-card");
    const totalCards = cards.length;

    // Create Dots
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".testimonial-dots span");
    dots[0].classList.add("active");

    function moveToSlide(newIndex) {
        if (newIndex < 0) newIndex = totalCards - 1;
        if (newIndex >= totalCards) newIndex = 0;
        
        index = newIndex;
        wrapper.style.transform = `translateX(-${index * 333}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => moveToSlide(index + 1));
    prevBtn.addEventListener("click", () => moveToSlide(index - 1));

    setInterval(() => moveToSlide(index + 1), 6000); // Slower auto-scroll
});








document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let counted = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 100;

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }

    function handleScroll() {
        const section = document.querySelector("#numbers");
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !counted) {
            counted = true;
            startCounter();
        }
    }

    window.addEventListener("scroll", handleScroll);
});

