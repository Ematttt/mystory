// Smooth scrolling for all anchor links, including Home
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target ID (e.g., #home)
    const targetElement = targetId === '#home' ? document.body : document.querySelector(targetId); // Handle #home case
    targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scroll
      block: 'start' // Align to the top of the viewport
    });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const readMore = post.querySelector(".read-more");
    const readLess = post.querySelector(".read-less");

    readMore.addEventListener("click", function (e) {
      e.preventDefault();
      post.classList.add("flipped");
    });

    readLess.addEventListener("click", function (e) {
      e.preventDefault();
      post.classList.remove("flipped");
    });
  });
});

