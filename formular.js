const form =document.getElementById("form");
const  email =document.getElementById("email");
const namn = document.getElementById("namn");
const tele = document.getElementById("number");
const text = document.getElementById("text");


const btnReset = document.getElementById("reset");


btnReset.addEventListener('click', (e) => {
       
    const formControlName = namn.parentElement;
    formControlName.className="form-control"; 

    const formControlNumber = number.parentElement;
    formControlNumber.className="form-control"; 

    const formControlEmail = email.parentElement;
    formControlEmail.className="form-control"; 

    const formControlText = text.parentElement;
    formControlText.className="form-control"; 
})

let validNamn=false;
let validEmail=false;
let validTele=false;
let validText=false;

function valideringNamn()
{
    
    const nameValue =namn.value;

    if(nameValue==='')
    {
        validNamn=false;
        setErrorFor(namn,'Namn kan inte vara blank');
    }
    else if(nameValue.length >=40)
    {   
        validNamn=false;
        setErrorFor(namn,'För långt namn');
    }
    else{
        validNamn=true;
        setSuccessFor(namn);
    }
}

function valideringEmail()
{
    const emailValue = email.value;  

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailValue==='')
    {
        validEmail = false;
        setErrorFor(email,'Email kan inte vara blank');
    }
    else if (emailValue.match(pattern))
    {
        validEmail = true;
        setSuccessFor(email);
        console.log(validEmail)
    }
    else{
        validEmail = false;
        setErrorFor(email,'Inte tillåten email');
        console.log(validEmail)
    }
}

function valideringNumber()
{
    const teleValue = tele.value;
    const phone = /^[\d,\s,\+,\-]{5,15}/;
    if(teleValue.length>=16)
    {
        validTele=false;
        setErrorFor(number,'För långt nummer');
    }
   else if(teleValue.match(phone))
    {
        validTele=true;
        setSuccessFor(number);
    }
    else if(teleValue==='')
    {
        validTele=false;
        setErrorFor(number,'Nummer kan inte vara blank');
    }
    else{
        validTele=false;
        setErrorFor(number, "ogiltligt nummer");
    }
}
function valideringText()
{
    const textValue = text.value;
    if (textValue==='')
    {
        validText=false;
        setErrorFor(text,'Textruta kan inte vara blank');
    }
    else
    {
        validText=true;
        setSuccessFor(text);
    }
}



const submitBtn=document.getElementById('submit');
submitBtn.addEventListener ('click', (e) =>{
    if(validNamn===true && validTele === true && validEmail===true && validText=== true)
    {
        document.getElementById("okBild").style.visibility="visible";

        const form = document.querySelectorAll(".form-control");
        form.forEach(element => element.remove());
        const btns= document.querySelectorAll(".knappar");
        btns.forEach(element => element.remove());

        const rubrik = document.querySelector("#rubriken");
        rubrik.innerText=("Tack!");

        const paragraf = document.querySelector("#paragraf");
        paragraf.innerHTML=("Vi har mottagit ditt formlär och kommer att återkomma så snart som möjligt!");
    }
    if (validNamn===false){
        setErrorFor(namn,"Ruta kan inte vara tom");
    }
    if (validTele===false){
        setErrorFor(number,"Ange ett korrekt värde");
    }
    if (validEmail===false){
        setErrorFor(email,"Ange ett korrekt värde");
    }
    if ( validText===false){
        setErrorFor(text,'Textruta kan inte vara blank');
    }
})

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className="form-control error";  
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className="form-control success"; 
    const small = formControl.querySelector('small');
}