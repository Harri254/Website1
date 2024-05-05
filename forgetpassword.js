let email =document.getElementById("email");

let main =document.getElementById('main-div');

main.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if ( email.value =="")
     {
        alert("Input value where needed");
    }
})