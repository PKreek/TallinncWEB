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
        test();
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
        let validEmail=false;
        setErrorFor(email,'Email kan inte vara blank');
    }
    else if (emailValue.match(pattern))
    {
        let validEmail=true;
        setSuccessFor(email);
    }
    else{
        let validEmail=false;
        setErrorFor(email,'Inte tillåten email');
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

function test(){
console.log(validNamn)
console.log(validEmail)
console.log(validTele)
console.log(validText)
}

const submitBtn=document.getElementById('submit');
submitBtn.addEventListener ('click', (e) =>{
    if(validNamn===true)
    {
        console.log(submitBtn);
        let meddelande=document.getElementById("rubrik");
        meddelande.replaceChild=("jdajsdjasj");
        let container=document.getElementsByClassName("container");
        alert("De gick!!!");
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


















/*const namnInput =document.querySelector('input[name="name"]')


const form = document.querySelector("form")
const nummer = document.getElementById("form")
const email = document.querySelector("name")
const text = document.querySelector("name")


console.log(namnInput);
console.log(form);form




form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("here");

});




namnInput.addEventListener('submit', (e) =>
{
    e.preventDefault();
    checkInputs();
});


function validation()
{
    const namnValue = namn.value
    const nummerValue = nummer.value
    const emailValue = email.value
    const textValue = text.value

}*/
