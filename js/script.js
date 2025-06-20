const slideShows = document.querySelectorAll(".slideShow");

let countElements = 1;
setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  if (countElements > slideShows.length) {
    slideShows[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000);
