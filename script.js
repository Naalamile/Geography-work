document.addEventListener("DOMContentLoaded", function () {
    // Reference to the "Scroll to Top" button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove("hidden");  // Show the button
        } else {
            scrollToTopBtn.classList.add("hidden");     // Hide the button
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});



// // Highlight current page in navbar
// document.addEventListener('DOMContentLoaded', () => {
//     const currentPage = window.location.pathname.split('/').pop();
//     const navLinks = document.querySelectorAll('nav a');
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPage) {
//             link.classList.add('text-black');
//         }
//     });
// });

// // Toggle mobile menu
// document.getElementById('menu-toggle').addEventListener('click', () => {
//     const navLinks = document.querySelector('nav ul');
//     navLinks.classList.toggle('hidden');
// });

// // Scroll to top button
// const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// window.onscroll = function () {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         scrollToTopBtn.classList.remove('hidden');
//     } else {
//         scrollToTopBtn.classList.add('hidden');
//     }
// };
// scrollToTopBtn.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });
