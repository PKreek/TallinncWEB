const slideButtons = document.querySelectorAll("[data-bildspel-knapp]");
const slides = document.querySelector("#bildspel-lista");
let activeSlide = document.querySelector("[data-active]");

// console.log(slideButtons)
// console.log(activeSlide)
// console.log(slides)

slideButtons.forEach(button => {
    button.addEventListener("click", (knapp) => {
        //const offset = button.dataset.data-bildspel-knapp === "next" ? 1 : -1;
        const offset = 1;
        //console.log(offset);

        //console.log([...slides.children].indexOf(activeSlide))

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log(slides)
        console.log(slides.length)
        if(newIndex===Array.from(slides.children).length){newIndex=0};

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        activeSlide = slides.children[newIndex];

        
    })
});