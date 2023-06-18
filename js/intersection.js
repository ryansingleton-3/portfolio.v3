// Select all .project-div, video, and heading elements on the page
const elements = document.querySelectorAll('.project-div, video, h1, h2, h3, h4, h5, h6, p, #headshot-img, .social-icon, #email');

// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5 // Callback will run when 10% of the target is visible
};

// Define the callback for the Intersection Observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the .project-div is in view, make it fully opaque
            entry.target.style.opacity = "1";
            // If the target is a video, play it
            if (entry.target.tagName === 'VIDEO') {
                entry.target.play();
            }
        } else {
            // If the .project-div is not in view, make it fully transparent
            entry.target.style.opacity = "0";
            // If the target is a video, pause it
            if (entry.target.tagName === 'VIDEO') {
                entry.target.pause();
            }
        }
    });
};


// Create the Intersection Observer with the defined callback and options
const observer = new IntersectionObserver(callback, options);

// Observe each element
elements.forEach(element => {
    observer.observe(element);
});
