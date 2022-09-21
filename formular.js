
const form =document.getElementById("form");
form.addEventListener("submit",(e)=>{
e.preventDefault();

});




function valideringEmail()
{

    const email = document.getElementById("email").value.trim()
    const emailChecken=document.getElementById("emailCheck")
    const textEmail = document.getElementById("errorEmail")
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



    console.log(textEmail)
   
    if(email.match(pattern))
    {
       
        valideringOk(emailChecken,textEmail, "De går fint!")
        /*emailChecken.classList.add("valid")
        emailChecken.classList.remove("invalid")
        emailChecken.className="form-controll success"
        textEmail.innerHTML = "Du har anget en korrekt epost!";
        textEmail.style.color= "#00ff00";*/
        
    }
    else
    {
        emailChecken.classList.remove("valid")
        emailChecken.className="form-controll error"
        
      
  
   
    }
    if(email ==="")
    {
        emailChecken.classList.remove("valid")
        emailChecken.className="form-controll error"
        emailChecken.classList.add("invalid")
    
        
    }



function valideringOk(typ, textEmail, meddelande)
{
    typ.classList.add("valid")
    typ.classList.remove("invalid")
    typ.className="form-controll success"
    textEmail.innerHTML = (meddelande);
    textEmail.style.color= "#00ff00";
}
function valideingIckeOk(typ, textEmail, meddelande)
{
    const formControllen = typ.parentElement;
    const small = typ.querySelector("small");

    console.log(formControll)
    console.log(small)

    typ.classList.remove("valid")
    typ.classList.add("invalid")
    typ.className="form-controll error"
    typ.style.display = "hidden"


    textEmail.innerHTML = (meddelande);
    textEmail.style.color= "#00ff00";
}

}








function valideringNamn()
{
var name=document.getElementById("name").value.trim()
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
if(name ==="")
{
    nameCheck.classList.remove("valid")
    nameCheck.classList.add("invalid")
    textNamn.innerHTML = "Rutan kan inte vara tom";
    textNamn.style.color= "red";
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
