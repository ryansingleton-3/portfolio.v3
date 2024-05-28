document.addEventListener("DOMContentLoaded", () => {
  const REVIEWS_ENDPOINT =
    "../reviews.json";
  const reviewsContainer = document.getElementById("reviews-list");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const reviewIndicatorsContainer =
    document.getElementById("review-indicators");

  let reviews = [];
  let currentIndex = 0;

  // Display review at the specified index
  function displayReview(index) {
    const review = reviews[index];

    if (review) {
      const reviewHTML = `
          <div class="review-item">
            <div class="review-wrapper">
            <svg class="quote-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
              <div class="review-text">
                <p class="review-p">"${review.review}"</p>
                <div>${generateStarRating(review.rating)}</div>
              </div>
              <div class="bottom-div">
                <img class="review-img" src="${review.imgPath}" alt="Image of ${
        review.name
      }." />
                <h4 class="review-header">- ${review.name}</h4>
              </div>
            </div>
          </div>
        `;

      reviewsContainer.innerHTML = reviewHTML;
    }
    updateReviewIndicators(index);
  }

  // Generate star rating HTML based on the rating value
  function generateStarRating(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "star yellow yellow-darker" : "star";
      starsHTML += `<svg class="${starClass}"data-value="${i}" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;
    }
    return starsHTML;
  }

  // Update review indicators
  function updateReviewIndicators(index) {
    reviewIndicatorsContainer.innerHTML = "";

    for (let i = 0; i < reviews.length; i++) {
      const indicator = document.createElement("span");
      indicator.classList.add("review-indicator");
      if (i === index) {
        indicator.classList.add("active");
      }
      reviewIndicatorsContainer.appendChild(indicator);
    }
  }

  // Retrieve and store reviews
  fetch(REVIEWS_ENDPOINT)
    .then((response) => response.json())
    .then((fetchedReviews) => {
      reviews = fetchedReviews;
      displayReview(currentIndex);
      if (currentIndex === 0) {
        prevButton.style.visibility = "hidden";
      } else if (currentIndex === reviews.length - 1) {
        nextButton.style.visibility = "hidden";
      } else {
        prevButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
      }
    })
    .catch((error) => console.log("Error fetching reviews:", error));

  // Event listener for previous button click
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayReview(currentIndex);
      reviewsContainer.scrollIntoView({ behavior: "smooth", block: "center" });
      if (currentIndex === 0) {
        prevButton.style.visibility = "hidden";
      } else if (currentIndex === reviews.length - 1) {
        nextButton.style.visibility = "hidden";
      } else {
        prevButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
      }
    }
  });

  // Event listener for next button click
  nextButton.addEventListener("click", () => {
    if (currentIndex < reviews.length - 1) {
      currentIndex++;
      displayReview(currentIndex);
      reviewsContainer.scrollIntoView({ behavior: "smooth", block: "center" });
      if (currentIndex === 0) {
        prevButton.style.visibility = "hidden";
      } else if (currentIndex === reviews.length - 1) {
        nextButton.style.visibility = "hidden";
      } else {
        prevButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
      }
    }
  });
});
