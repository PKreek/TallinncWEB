
//BILDSPEL
const slideButtons = document.querySelectorAll("[data-slideknapp]");
const slides = document.querySelector("#bildspel-lista");
let activeSlide = document.querySelector("[data-active]");

slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
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
//SlUT PÅ BILDSPEL

//WEBSHOP

const togglaKundvagn = (()=>{
    const kundvagnen = document.getElementById("kundvagn-meny");
    if(kundvagnen.style.display === "block"){
        kundvagnen.style.display = "none";
    }else{
        kundvagnen.style.display = "block";
    }
    
});

const { createApp } = Vue

const app = createApp ({
    data() {
        return {
            iKundvagn: 0,
            kundvagn: [],
            skor: [
                {
                    namn: "En sko",
                    pris: "1199",
                    bild: "bilder/sko1.jpg"
                },
                {
                    namn: "En annan sko",
                    pris: "1199",
                    bild: "bilder/sko2.jpg"
                }
            ]
        }
    },
    methods: {
        kopSko(sko) {
            this.kundvagn.push(sko);
            this.iKundvagn++;
        }
    }
}).mount('#app'); 
