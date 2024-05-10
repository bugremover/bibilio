import books from "./BookDetails.js";
const swiper = new Swiper(".swiper", {
  sliderPreView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-scrollbar",
    type: "progressbar",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("show-search");
  });
};
toggleSearch("search-bar", "search-btn");

// // Function to create a card for each book and append it to the container
// function displayBooks() {
//   const container = document.querySelector("#books");
//   books.forEach((book) => {
//     // Create main card element
//     const cardMain = document.createElement("div");
//     cardMain.classList.add("card-main");

//     // Create card element
//     const card = document.createElement("div");
//     card.classList.add(
//       "card",
//       "p-6",
//       "rounded-2xl",
//       "bg-mate-black",
//       "flex",
//       "flex-col",
//       "justify-center",
//       "items-center"
//     );

//     // Create card image
//     const cardImg = document.createElement("div");
//     cardImg.classList.add("card-img", "mb-5");
//     const img = document.createElement("img");
//     img.src = book.imgUrl;
//     img.alt = book.name;
//     cardImg.appendChild(img);

//     // Create book title
//     const title = document.createElement("h4");
//     title.classList.add("text-lg", "mb-2");
//     title.textContent = book.name;

//     // Create book price
//     const price = document.createElement("h5");
//     price.classList.add("text-base", "text-gray-600");
//     price.innerHTML = `&#8377; ${book.price}`;

//     // Append elements to card
//     card.appendChild(cardImg);
//     card.appendChild(title);
//     card.appendChild(price);

//     // Append card to card main
//     cardMain.appendChild(card);

//     // Create card options
//     const cardOption = document.createElement("div");
//     cardOption.classList.add("card-option", "flex", "justify-between");

//     // Create heart icon
//     const heartIcon = document.createElement("span");
//     heartIcon.classList.add("heart-icon");
//     heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

//     // Create bag icon
//     const bagIcon = document.createElement("span");
//     bagIcon.classList.add("bag-icon");
//     bagIcon.innerHTML = '<ion-icon name="bag-outline"></ion-icon>';

//     // Append icons to card option
//     cardOption.appendChild(heartIcon);
//     cardOption.appendChild(bagIcon);

//     // Append card option to card main
//     cardMain.appendChild(cardOption);

//     // Append card main to container
//     container.appendChild(cardMain);
//   });
// }

// // Call the function to display books
// displayBooks();

// Function to create a card for each book and append it to the container
function displayBooks() {
  const container = document.querySelector("#books");
  const filter = document.querySelector(".filter");

  // Clear previous content
  container.innerHTML = "";

  // Add event listener to filter
  filter.addEventListener("change", function () {
    const selectedValue = this.value; // Get the selected value
    let sortedBooks = [];

    // Sort books array based on the selected value
    if (selectedValue === "atoz") {
      sortedBooks = books.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedValue === "price") {
      sortedBooks = books.slice().sort((a, b) => a.price - b.price);
    } else if (selectedValue === "ratings") {
      sortedBooks = books.slice().sort((a, b) => b.ratings - a.ratings);
    } else {
      // Display books without sorting
      displaySortedBooks(books);
      return;
    }

    // Display sorted books
    displaySortedBooks(sortedBooks);
  });

  // Function to display sorted books
  function displaySortedBooks(books) {
    // Clear previous content
    container.innerHTML = "";

    // Iterate through sorted books array
    books.forEach((book) => {
      // Create main card element
      const cardMain = document.createElement("div");
      cardMain.className = "card-main";

      // Create card element
      const card = document.createElement("div");
      card.className =
        "card p-6 rounded-2xl bg-mate-black flex flex-col justify-center items-center";

      // Create card image
      const cardImg = document.createElement("div");
      cardImg.className = "card-img mb-5";
      const img = document.createElement("img");
      img.src = book.imgUrl;
      img.alt = book.name;
      cardImg.appendChild(img);

      // Create book title
      const title = document.createElement("h4");
      title.className = "text-lg mb-2";
      title.textContent = book.name;

      // Create book price
      const price = document.createElement("h5");
      price.className = "text-base text-gray-600";
      price.innerHTML = `&#8377; ${book.price}`;

      // Create book ratings
      const ratings = document.createElement("p");
      ratings.className = "text-sm text-gray-600";
      ratings.textContent = `Ratings: ${book.ratings}`;

      // Append elements to card
      card.appendChild(cardImg);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(ratings);

      // Append card to card main
      cardMain.appendChild(card);

      // Create card options
      const cardOption = document.createElement("div");
      cardOption.className = "card-option flex justify-between";

      // Create heart icon
      const heartIcon = document.createElement("span");
      heartIcon.className = "heart-icon";
      heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

      // Create bag icon
      const bagIcon = document.createElement("span");
      bagIcon.className = "bag-icon";
      bagIcon.innerHTML = '<ion-icon name="bag-outline"></ion-icon>';

      // Append icons to card option
      cardOption.appendChild(heartIcon);
      cardOption.appendChild(bagIcon);

      // Append card option to card main
      cardMain.appendChild(cardOption);

      // Append card main to container
      container.appendChild(cardMain);
    });
  }

  // Display initial books
  displaySortedBooks(books);
}

// Call the function to display books
displayBooks();

// Heart Icons
document.querySelectorAll(".heart-icon ion-icon").forEach(function (heartIcon) {
  heartIcon.addEventListener("mouseenter", function () {
    heartIcon.setAttribute("name", "heart");
    heartIcon.style.color = "#DE3163";
    heartIcon.style.fontSize = "20px";
    heartIcon.style.cursor = "pointer";
  });

  heartIcon.addEventListener("mouseleave", function () {
    heartIcon.setAttribute("name", "heart-outline");
    heartIcon.style.color = "";
    heartIcon.style.fontSize = "";
  });
});

// Bag Icons
document.querySelectorAll(".bag-icon ion-icon").forEach(function (bagIcon) {
  bagIcon.addEventListener("mouseenter", function () {
    bagIcon.setAttribute("name", "bag");
    bagIcon.style.color = "#fff";
    bagIcon.style.fontSize = "20px";
    bagIcon.style.cursor = "pointer";
  });

  bagIcon.addEventListener("mouseleave", function () {
    bagIcon.setAttribute("name", "bag-outline");
    bagIcon.style.color = "";
    bagIcon.style.fontSize = "";
  });
});

const bestSellingBooksContainer = document.querySelector(".best-selling-books");
// Create the image container
const imgContainer = document.createElement("div");
imgContainer.classList.add("flex", "justify-center", "items-center");

// Create the image element
const imgDiv = document.createElement("div");
imgDiv.classList.add("img-div");
const img = document.createElement("img");
img.src = "img/Animal_Farm-transformed.jpeg";
img.alt = "Animal Farm";
imgDiv.appendChild(img);

// Append image to its container
imgContainer.appendChild(imgDiv);

// Create the book details container
const bookDetailsContainer = document.createElement("div");
bookDetailsContainer.classList.add(
  "flex",
  "flex-col",
  "justify-center",
  "items-start"
);

// Create the headings and paragraphs
const heading = document.createElement("h2");
heading.classList.add(
  "mb-16",
  "best-book-heading",
  "text-3xl",
  "text-gray-400"
);
heading.textContent = "Best Selling Book";
const bookTitle = document.createElement("h3");
bookTitle.classList.add("mb-5", "text-xl");
bookTitle.textContent = "Animal Farm";
const author = document.createElement("p");
author.classList.add("mb-5", "text-base", "text-gray-500");
author.textContent = "BY GEORGE ORWELL";
const description = document.createElement("p");
description.classList.add("mb-8", "text-sm", "text-gray-600", "best-book-text");
description.textContent = `Animal Farm depicts a farm's uprising, echoing the pitfalls of
  power as animals strive for equality, only to succumb to
  corruption and tyranny. Orwell's novella serves as a stark
  warning, illustrating the dangers of totalitarianism and the
  betrayal of ideals.`;
const shopLink = document.createElement("a");
shopLink.href = "#";
shopLink.classList.add(
  "next-btn",
  "text-sm",
  "text-gray-700",
  "flex",
  "items-center",
  "gap-2"
);
shopLink.innerHTML = `SHOP IT NOW <span class="text-lg font-medium flex justify-center items-center">&#8594;</span>`;

// Append elements to the book details container
bookDetailsContainer.appendChild(heading);
bookDetailsContainer.appendChild(bookTitle);
bookDetailsContainer.appendChild(author);
bookDetailsContainer.appendChild(description);
bookDetailsContainer.appendChild(shopLink);

// Append both containers to the main section
bestSellingBooksContainer.appendChild(imgContainer);
bestSellingBooksContainer.appendChild(bookDetailsContainer);
