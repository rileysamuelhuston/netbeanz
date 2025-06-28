const navbar = document.getElementById('navSupercontainer');
const siteTitle = document.querySelector('.site-title');
const sections = document.querySelectorAll('.chapter-container');

let currentSection = null;
let navHeight = navbar.offsetHeight;

if (sections.length > 0) {

  function onScroll() {
    const offsetPoint = navHeight;
    let newSection = null;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= offsetPoint) {
        newSection = section;
      }
    });

    if (newSection && newSection !== currentSection) {
      currentSection = newSection;

      const navbarColor = newSection.dataset.navbar || '#4EDF41';
      const titleColor = newSection.dataset.title || 'black';
      const bgImage = newSection.dataset.backgroundImage || '';
      const bgSize = newSection.dataset.backgroundSize || 'cover';

      navbar.style.backgroundColor = navbarColor;

      if (bgImage) {
        navbar.style.backgroundImage = bgImage;
        navbar.style.backgroundSize = bgSize;
        navbar.style.backgroundPosition = 'center';
      } else {
        navbar.style.backgroundImage = 'none';
      }

      siteTitle.style.color = titleColor;
    }
  }

  // Throttle scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Resize/orientation recalculations
  window.addEventListener('resize', () => {
    navHeight = navbar.offsetHeight;
  });

  window.addEventListener('orientationchange', () => {
    navHeight = navbar.offsetHeight;
  });

  window.addEventListener('DOMContentLoaded', onScroll);

} else {
  // No sections? Keep defaults
  navbar.style.backgroundColor = '#4EDF41';
  navbar.style.backgroundImage = 'none';
  siteTitle.style.color = 'black';
}
