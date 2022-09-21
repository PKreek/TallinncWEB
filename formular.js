function valideringEmail()
{
    var email = document.getElementById("email").value
    var emailChecken=document.getElementById("emailCheck")
    var textEmail = document.getElementById("errorEmail")
    


    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    console.log(form)
    console.log(email);


    if(email.match(pattern))
    {
       
        emailChecken.classList.add("valid")
        emailChecken.classList.remove("invalid")
        textEmail.innerHTML = "Du har anget en korrekt epost!";
        textEmail.style.color= "#00ff00";
    }
    else
    {
    emailChecken.classList.remove("valid")
    emailChecken.classList.add("invalid")
    textEmail.innerHTML = "Ange korrekt email";
    textEmail.style.color= "#ff0000";
    }
if(email =="")
{
    emailChecken.classList.remove("valid")
    emailChecken.classList.add("invalid")
    textEmail.innerHTML = "";
    textEmail.style.color= "#00ff00";
}
}


function valideringNamn()
{
var name=document.getElementById("name").value
var nameCheck=document.getElementById("nameCheck")
var textNamn=document.getElementById("errorNamn")

console.log(name);
if(name.length > 30 )
{
    console.log(30);
    nameCheck.classList.remove("valid")
    nameCheck.classList.add("invalid")
    textNamn.innerHTML="Max antal ord är 30. Vänligen ange inte fler"
    textNamn.style.color="#ff0000";
}

else
{
    nameCheck.classList.add("valid")
    nameCheck.classList.remove("invalid")
    textNamn.innerHTML="Du har angett ett tillåtet namn!"
    textNamn.style.color="#00ff00";
}
if(name =="")
{
    nameCheck.classList.remove("valid")
    nameCheck.classList.add("invalid")
    textNamn.innerHTML = "";
    textNamn.style.color= "#00ff00";
}
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
