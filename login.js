let email =document.getElementById("email");
let pass1= document.getElementById("password-one");

let main =document.getElementById('main-div');

main.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if ( email.value =="" || pass1.value=="")
     {
        alert("Input value where needed");
    }
})