import books from "./BookDetails.js";

// Function to generate star ratings HTML
function generateStarRatings(ratings) {
  const starContainer = document.createElement("div");
  starContainer.className = "star-container";

  const fullStars = Math.floor(ratings);
  const halfStar = ratings - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement("span");
    star.innerHTML = "&#9733;"; // Full star symbol
    star.className = "star";
    starContainer.appendChild(star);
  }

  if (halfStar === 1) {
    const halfStarElem = document.createElement("span");
    halfStarElem.innerHTML = "&#9733;"; // Half star symbol
    halfStarElem.className = "star half";
    starContainer.appendChild(halfStarElem);
  }

  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement("span");
    star.innerHTML = "&#9734;"; // Empty star symbol
    star.className = "star";
    starContainer.appendChild(star);
  }

  return starContainer;
}

// Function to display star ratings for the "Animal Farm" book
function displayStarRatings() {
  const animalFarmBook = books.find((book) => book.name === "Animal Farm");

  if (animalFarmBook) {
    const starRatingsContainer = document.getElementById("starRatings");

    // Clear previous content
    starRatingsContainer.innerHTML = "";

    // Generate and display star ratings for "Animal Farm" book
    const starRating = generateStarRatings(parseFloat(animalFarmBook.ratings));
    starRatingsContainer.appendChild(starRating);
  } else {
    console.error("Book not found!");
  }
}

// Call the function to display star ratings for "Animal Farm" book
displayStarRatings();
