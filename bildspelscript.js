const slideButtons = document.querySelectorAll("[data-slideknapp]");
const slides = document.querySelector("#bildspel-lista");
let activeSlide = document.querySelector("[data-active]");
let slideTimer;
const slideIntervalMillis = 5000; //hur lång tid mellan varje slide i milliesekunder 

slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slideknapp === "next" ? 1 : -1;
        nextSlide(offset);
    })
})

const nextSlide = ((offset)=>{
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
   
    const arrayLength = Array.from(slides.children).length;
    if(newIndex===arrayLength){
        newIndex=0;
    } else if (newIndex < 0) {
        newIndex = arrayLength - 1;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    activeSlide = slides.children[newIndex];    

    clearTimeout(slideTimer);
    slideTimer = setTimeout(()=>{nextSlide(1)}, slideIntervalMillis);
})

slideTimer = setTimeout(()=>{nextSlide(1)}, slideIntervalMillis);

//Hamburgarmeny

const mobilToggle = document.querySelector("#hameny");
const navLinks = document.querySelector(".navlista");

mobilToggle.addEventListener("click", () => {
    navLinks.classList.toggle("opened");

})
