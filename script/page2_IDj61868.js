function validateInput(form){
    if(validateName(form) && validateEmail(form) && validateId(form) && validateDate(form)){
        
        

        changeOption();

     return false;
        
    }
   
}

function changeOption(){
    var link1 = document.getElementById("pg3")
    


    link1.className = 'active';
    
    
    
   let sentence = document.createElement('p')
    let target = document.getElementById('target')


    sentence.append("The Images tab is now open")
    target.style="visibility:visible;"

    target.append(sentence);

    let button = document.getElementById('subBtn')
    button.classList = 'disableBtn';
    






}





function validateName(form){
var name = form.elements["fullName"];
    if(name.validity.valueMissing){

        name.setCustomValidity("Please enter your full name here.");
       return false;
    }
    else if(name.validity.patternMismatch){

        name.setCustomValidity(
            "Please enter your first name, a space, and then your last name. Make sure your first and last name are both capitalized.")
            return false;
    }
    else{
        name.setCustomValidity("")
        return true;
    }
}

function validateEmail(form){
    var email = form.elements["email"];
        if(email.validity.valueMissing){
    
            email.setCustomValidity("Please enter your email address here.");
           return false;
        }
        else if(email.validity.patternMismatch){
    
            email.setCustomValidity(
                'Your email pattern is incorrect. Make sure to include an "@" in your input and a ".ca" or ".com" at the end of your email.')
                return false;
        }
        else{
            email.setCustomValidity("")
            return true;
        }
    }

    function validateId(form){
    var id = form.elements["stuId"];
        if(id.validity.valueMissing){
        
            id.setCustomValidity("Please enter your student id here.");
            return false;
        }
        else if(id.validity.patternMismatch){ 
        
            id.setCustomValidity("Your student ID pattern is incorrect. Enter all 9 numbers and include ID at the end of your input.")
             return false;
        }
        else{
            id.setCustomValidity("")
            return true;
        }
    }

function validateDate(form){
    var date = form.elements["birthDate"];
        if(date.validity.valueMissing){
    
            date.setCustomValidity("Please enter your date of birth here.");
           return false;
        }
        else{
            date.setCustomValidity("")
            return true;
        }
    }



