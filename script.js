// Custom Cursor Movement
const main = document.querySelector(".page");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (val) {
  gsap.to(cursor, {
    x: val.clientX,
    y: val.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});


// Page Load Animation using GSAP
function page1Animation() {
  const tl = gsap.timeline();

  tl.from("nav img, nav .nav-links ul li a,  nav .fa-bars, nav .fa-times", {
    y: -40,
    duration: 0.6,
    delay: 0.2,
    opacity: 0,
    stagger: 0.1,
  });

  tl.from(".part1 h3", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".part1 h1, .part1 h2", {
    x: -150,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
  });

  tl.from(".button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".part2 img", {
    x: 200,
    opacity: 0,
    duration: 0.5,
  });
}
page1Animation();

// ScrollReveal Animations
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".about h2, .skills h1, .project h1, #contact h1",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".about p, .skill-name, .project1, #contact div, #contact button",
  { origin: "bottom" }
);

// mobile menu
var navLinks = document.getElementById("navLinks");

      function showMenu() {
        navLinks.classList.add("show");
      }

      function hideMenu() 
      {
        navLinks.classList.remove("show");
      }

      // Add this to close the menu when a link is clicked
      var links = document.querySelectorAll("#navLinks a");
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("show");
        });
      });
