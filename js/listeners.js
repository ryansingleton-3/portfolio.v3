document.addEventListener("DOMContentLoaded", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  function showTab(tabId) {
    tabItems.forEach(function (item) {
      item.classList.remove("active");
    });

    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabId);
    const selectedTabItem = document.querySelector(`[data-tab="${tabId}"]`);

    selectedTab.classList.add("active");
    selectedTabItem.classList.add("active");
  }

  tabItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const tabId = item.getAttribute("data-tab");
      showTab(tabId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const educationTabItems = document.querySelectorAll(".education-tab-item");
  const educationTabContents = document.querySelectorAll(
    ".education-tab-content"
  );

  function showTab(educationTabId) {
    educationTabItems.forEach(function (item) {
      item.classList.remove("active");
    });

    educationTabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    const selectedTab = document.getElementById(educationTabId);
    const selectedTabItem = document.querySelector(
      `[data-tab="${educationTabId}"]`
    );

    selectedTab.classList.add("active");
    selectedTabItem.classList.add("active");
  }

  educationTabItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const educationTabId = item.getAttribute("data-tab");
      showTab(educationTabId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a, .inline-link");
  let overlay = document.querySelector(".overlay")
  let navMenu = document.querySelector("#right-side-nav"); // Add this line
  
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        navMenu.classList.remove("active"); // Add this line
      }
    });
  });
});



// Check if screen size is less than 768px
let isSmallScreen = window.matchMedia("(max-width: 768px)");

let menuButton = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector("#right-side-nav");

menuButton.addEventListener("click", function () {
  // Only apply these behaviors for small screens
  if (isSmallScreen.matches) {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      menuButton.style.position = "fixed";
      menuButton.style.top = "10px";
      menuButton.style.right = "10px";
    } else {
      menuButton.style.position = "";
      menuButton.style.top = "";
      menuButton.style.right = "";
    }
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active"); // Hide the navigation menu
    menuButton.style.position = ""; // Reset the position of the hamburger menu
    menuButton.style.top = "";
    menuButton.style.right = "";
  }
});

// Function to hide or show social icons
function checkScroll() {
  let socialIcons = document.querySelectorAll(".social-icon")
  console.log(window.pageYOffset); // Add this line
  if (window.matchMedia("(min-width: 768px)").matches) {
    // If screen width is larger than 768px, always show social icons
    socialIcons.forEach((icon) => {
      icon.style.opacity = "1";
      icon.style.visibility = "visible";
    });
  } else {
    // If screen width is less than 768px, hide/show social icons based on scroll position
    if (window.pageYOffset > 1) {
      // If page is scrolled, hide social icons
      socialIcons.forEach((icon) => {
        icon.style.opacity = "0";
        icon.style.visibility = "hidden";
      });
    } else {
      // If page is not scrolled, show social icons
      socialIcons.forEach((icon) => {
        icon.style.opacity = "1";
        icon.style.visibility = "visible";
      });
    }
  }
}

// Run checkScroll function when page is scrolled
window.onscroll = checkScroll;

function mobile () {
  // Check if screen size is greater than 768px
if (window.matchMedia("(min-width: 768px)").matches) {
  // If media query matches
  let hamburger = document.querySelector(".hamburger-menu");
  let rightNav = document.querySelector("#right-side-nav")
  hamburger.classList.remove("active");
  rightNav.classList.remove("overlay")
} else {
  // If media query does not match
  let element = document.querySelector(".hamburger-menu");
  let rightNav = document.querySelector("#right-side-nav")
  element.classList.add("active");
  rightNav.classList.add("overlay")
}
}


// Call checkScroll function when the page is loaded
checkScroll();

// Call checkScroll function when the screen is resized
window.addEventListener("resize", checkScroll);

// Call checkScroll function when the page is scrolled
window.addEventListener("scroll", checkScroll);
window.addEventListener("scroll", mobile);
