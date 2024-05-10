document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Toggle active class to expand/collapse FAQ item
      this.classList.toggle("active");
    });
  });
});

// JavaScript code for FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach(function (question) {
  question.addEventListener("click", function () {
    // Toggle answer visibility
    const answer = this.nextElementSibling;
    answer.classList.toggle("hidden");

    // Toggle icon
    const toggleIcon = this.querySelector(".toggle-icon");
    if (toggleIcon.textContent === "+") {
      toggleIcon.innerText = "-";
    } else {
      toggleIcon.innerText = "+";
    }

    // Add or remove text-2xl class to/from the toggle icon
  });
});
