function validering()
{
   
    var form = document.getElementById("form")
    var email = document.getElementById("email").value
    


    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    console.log(form)
    console.log(email);


    if(email.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
    }
    
    console.log(form)
    console.log(email);
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
