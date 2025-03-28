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
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const dotsContainer = document.querySelector(".testimonial-dots");

    let currentIndex = 0;
    const cards = document.querySelectorAll(".testimonial-card");
    const totalCards = cards.length;
    const visibleCards = 3; // Adjust based on screen width
    const cardWidth = cards[0].offsetWidth + 70; // Including gap

    // Create Dots
    for (let i = 0; i < totalCards - (visibleCards - 1); i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.setAttribute("data-index", i);
        dotsContainer.appendChild(dot);
    }

    const updateDots = () => {
        document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
        document.querySelector(`.dot[data-index="${currentIndex}"]`).classList.add("active");
    };

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth+40}px)`;
            updateDots();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            wrapper.style.transform = `translateX(-${currentIndex * cardWidth-50}px)`;
            updateDots();
        }
    });

    // Auto-slide every 5s
    setInterval(() => {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        wrapper.style.transform = `translateX(-${currentIndex * cardWidth+60}px)`;
        updateDots();
    }, 5000);
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

