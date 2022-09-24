
//WEBSHOP

//const kundLista = []

    

    

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
            inloggNamn: "",
            inloggadId: "",
            inloggMeddelande: "",
            kundLista: [],
            iKundvagn: 0,
            kundvagn: [],
            skor: [
                {
                    namn: "En sko",
                    pris: 1199,
                    bild: "bilder/sko1.jpg"
                },
                {
                    namn: "En annan sko",
                    pris: 1199,
                    bild: "bilder/sko2.jpg"
                },
                {
                    namn: "En tredje sko",
                    pris: 2199,
                    bild: "bilder/sko3.jpg"
                },
                {
                    namn: "Ännu en sko",
                    pris: 2399,
                    bild: "bilder/sko3.jpg"
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
            this.kundvagn.splice(sko.indexOf,1);
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
