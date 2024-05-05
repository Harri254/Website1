let name1=document.getElementById("name-one");
let name2= document.getElementById("name-two");
let email =document.getElementById("email-address");
let pass1= document.getElementById("password-one");
let pass2= document.getElementById("password-two");


let main =document.getElementById('main-div');

main.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if ( name1.value=="" || name2.value =="" || email.value =="" || pass1.value=="" || pass2.value=="")
     {
        alert("Input value where needed");
    }

    else if (pass1.value != pass2.value){
        alert("Password do not match");
        pass1.value="";
        pass2.value="";
    }
    else{
        alert("Successful submited!");
        console.log('${name1} your registration is successful!');

        pass1.value="";
        pass2.value="";
        email.value="";
        name1.value="";
        name2.value="";
    }
})
