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

const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("show-search");
  });
};
toggleSearch("search-bar", "search-btn");
