
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
  
  
  
  
  

  