const viewMore = document.querySelector(".view-more-link");
const hiddenElements = document.querySelectorAll(".hidden");

viewMore.addEventListener("click", function () {
  hiddenElements.forEach((element) => {
    element.classList.toggle("hidden");
    if (element.classList.contains("hidden")) {
      viewMore.textContent = "Show More";
    } else {
      viewMore.textContent = "Show Less";
    }
  });
});
