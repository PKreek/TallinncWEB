const form =document.getElementById("form");
const  email =document.getElementById("email")
const namn = document.getElementById("namn")
const tele = document.getElementById("number")
const text = document.getElementById("text")



function valideringNamn()
{
    
    const nameValue =namn.value

    if(nameValue==='')
    {
        setErrorFor(namn,'Namn kan inte vara blank')
    }
    else if(nameValue.length >=40)
    {
        setErrorFor(namn,'För långt namn')
    }
    else{
        setSuccessFor(namn)
    }
}

function valideringEmail()
{
    const emailValue = email.value  

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailValue==='')
    {
        setErrorFor(email,'Email kan inte vara blank')
    }
    else if (emailValue.match(pattern))
    {
        setSuccessFor(email)
    }
    else{
        setErrorFor(email,'Inte tillåten email')
    }
}

function valideringNumber()
{
    const teleValue = tele.value
    const phone = /^[\d,\s,\+,\-]{5,15}/;
    if(teleValue.length>=16)
    {
        console.log(55)
        setErrorFor(number,'För långt nummer')
        
    }
   else if(teleValue.match(phone))
        {
        setSuccessFor(number)
        console.log(577)
    }
    else if(teleValue==='')
    {
        console.log(22)
        setErrorFor(number,'Nummer kan inte vara blank')
    }
}
function valideringText()
{
    const textValue = text.value
    if (textValue==='')
    {
        console.log(22)
        setErrorFor(text,'Textruta kan inte vara blank')
    }
    else
    {
        setSuccessFor(text)
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    console.log(formControl) 
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
