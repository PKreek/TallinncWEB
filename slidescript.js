const slideButtons = document.querySelectorAll("[data-slideknapp]");
const slides = document.querySelector("#bildspel-lista");
let activeSlide = document.querySelector("[data-active]");

// console.log(slideButtons)
// console.log(activeSlide)
// console.log(slides)

slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button)
        console.log(button.dataset.slideknapp)
        const offset = button.dataset.slideknapp === "next" ? 1 : -1;
        console.log(offset);

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
       
        const arrayLength = Array.from(slides.children).length;
        if(newIndex===arrayLength){
            newIndex=0;
        } else if (newIndex < 0) {
            newIndex = arrayLength - 1;
        };
        

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        activeSlide = slides.children[newIndex];

        
    })
});