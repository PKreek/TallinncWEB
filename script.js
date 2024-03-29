
//WEBSHOP

const togglaKundvagn = (()=>{
    const kundvagnen = document.getElementById("kundvagn-meny");
    if(kundvagnen.style.display === "block"){
        kundvagnen.style.display = "none";
    }else{
        kundvagnen.style.display = "block";
    }
})

const { createApp } = Vue

const app = createApp ({
    data() {
        return {
            checkaUt: false,
            inloggad: false,
            visaKundlista: false,
            inloggNamn: "",
            inloggadId: "",
            inloggMeddelande: "",
            kundLista: [],
            iKundvagn: 0,
            kundvagn: [],
            skor: [
                {
                    namn: "Zoom Alphafly",
                    pris: 1199,
                    bild: "bilder/sko1.jpg"
                },
                {
                    namn: "Nike SuperRep 2 Next",
                    pris: 1199,
                    bild: "bilder/sko2.jpg"
                },
                {
                    namn: "Nike ZoomX Vaporfly",
                    pris: 2199,
                    bild: "bilder/sko3.jpg"
                },
                {
                    namn: "Nike Zoom Structure 24",
                    pris: 2399,
                    bild: "bilder/sko4.jpg"
                },
                {
                    namn: "Nike Zoom Rival",
                    pris: 1199,
                    bild: "bilder/sko5.jpg"
                },
                {
                    namn: "Nike SuperRep 2 Next",
                    pris: 1199,
                    bild: "bilder/sko6.jpg"
                },
                {
                    namn: "Nike Run Swift 2",
                    pris: 2199,
                    bild: "bilder/sko7.jpg"
                },
                {
                    namn: "Nike Zoom Fly",
                    pris: 2399,
                    bild: "bilder/sko8.jpg"
                }
            ]
        }
    },
    computed: {
        totalSumma() {
            let summa = 0;
            this.kundvagn.forEach(sko=>{
                summa += sko.pris;
            });
            return summa;
        }
    },
    methods: {
        kopSko(sko) {
            this.kundvagn.push(sko);
            this.iKundvagn++;
        },
        taBortSko(sko) {
            this.kundvagn.splice(this.kundvagn.indexOf(sko),1);
            this.iKundvagn--;
        },
        loggaIn(user) {
            this.kundLista.forEach(e =>{
                if(e.username===user){
                    this.inloggadId = this.kundLista.indexOf(e);
                    this.inloggad = true;
                }else{
                    this.inloggMeddelande = "Anvädarnamnet hittades inte";
                }
            })   
        },
        hamtaKunder() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                data.forEach(e => {
                    this.kundLista.push({
                        username: e.username,
                        name: e.name,
                        email: e.email,
                        address: e.address
                    })
                })
            })
        }
    },
    created() {
        this.hamtaKunder()
    }
}).mount('#app')
