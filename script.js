function scrollToElement(elementSelector, instance = 0) {
  //Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  //Check if there are elements matching the selector and if the requested instance exsits
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  event.preventDefault();
  scrollToElement(".header");
});
link2.addEventListener("click", () => {
  event.preventDefault();
  //Scroll to the second element with "header" class
  scrollToElement(".header", 1);
});
link3.addEventListener("click", () => {
  event.preventDefault();
  scrollToElement(".column");
});
