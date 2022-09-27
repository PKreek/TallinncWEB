//Hamburgarmeny

const mobilToggle = document.querySelector("#hameny");
const navLinks = document.querySelector(".navlista");

mobilToggle.addEventListener("click", () => {
    navLinks.classList.toggle("opened");

})