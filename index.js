function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    var pan = document.forms['myForm']["fpan"].value;
    if (pan==="/[A-Z]{5}[0-9]{4}[A-Z]{1}$/"){
        seterror("loanAmount", "*Pan is not valid !");
        returnval = false;
    }
    var laonAmount = document.forms['myForm']["floan"].value;
    if (laonAmount.length != 9){
        seterror("loanAmount", "*Phone number should be of 10 digits!");
        returnval = false;
    }

   

    return returnval;
}

