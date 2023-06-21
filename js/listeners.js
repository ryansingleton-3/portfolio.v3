
// let video = document.getElementById('video');

// video.addEventListener('mouseover', function() {
//     this.play();
// });

// video.addEventListener('mouseout', function() {
//     this.pause();
// });

document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function showTab(tabId) {
      tabItems.forEach(function (item) {
        item.classList.remove('active');
      });
  
      tabContents.forEach(function (content) {
        content.classList.remove('active');
      });
  
      const selectedTab = document.getElementById(tabId);
      const selectedTabItem = document.querySelector(`[data-tab="${tabId}"]`);
  
      selectedTab.classList.add('active');
      selectedTabItem.classList.add('active');
    }
  
    tabItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const tabId = item.getAttribute('data-tab');
        showTab(tabId);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const educationTabItems = document.querySelectorAll('.education-tab-item');
    const educationTabContents = document.querySelectorAll('.education-tab-content');
  
    function showTab(educationTabId) {
      educationTabItems.forEach(function (item) {
        item.classList.remove('active');
      });
  
      educationTabContents.forEach(function (content) {
        content.classList.remove('active');
      });
  
      const selectedTab = document.getElementById(educationTabId);
      const selectedTabItem = document.querySelector(`[data-tab="${educationTabId}"]`);
  
      selectedTab.classList.add('active');
      selectedTabItem.classList.add('active');
    }
  
    educationTabItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const educationTabId = item.getAttribute('data-tab');
        showTab(educationTabId);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a, .inline-link');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
    });
  });

let menuButton = document.querySelector('.hamburger-menu');
let navMenu = document.querySelector('#right-side-nav');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains("active")) {
        menuButton.style.position = "fixed";
        menuButton.style.top = "10px";
        menuButton.style.right = "10px";
    } else {
        menuButton.style.position = "";
        menuButton.style.top = "";
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active'); // Hide the navigation menu
        menuButton.style.position = ""; // Reset the position of the hamburger menu
        menuButton.style.top = "";
        menuButton.style.right = "";
    }
});
  
// Function to hide or show social icons
function checkScroll() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        // If screen width is larger than 768px, always show social icons
        socialIcons.forEach(icon => {
            icon.style.opacity = '1';
            icon.style.visibility = 'visible';
        });
    } else {
        // If screen width is less than 768px, hide/show social icons based on scroll position
        if (window.pageYOffset > 100) {
            // If page is scrolled, hide social icons
            socialIcons.forEach(icon => {
                icon.style.opacity = '0';
                icon.style.visibility = 'hidden';
            });
        } else {
            // If page is not scrolled, show social icons
            socialIcons.forEach(icon => {
                icon.style.opacity = '1';
                icon.style.visibility = 'visible';
            });
        }
    }   
}


// Run checkScroll function when page is scrolled
window.onscroll = checkScroll;


// Check if screen size is greater than 768px
if (window.matchMedia("(min-width: 768px)").matches) {
    // If media query matches
    var hamburger = document.querySelector(".hamburger-menu");
    hamburger.classList.remove("active");
  } else {
    // If media query does not match
    var element = document.querySelector(".hamburger-menu");
    element.classList.add("active");
}

// Call checkScroll function when the page is loaded
checkScroll();

// Call checkScroll function when the screen is resized
window.addEventListener('resize', checkScroll);

// Call checkScroll function when the page is scrolled
window.addEventListener('scroll', checkScroll);
  

  
  
  
  
  

  