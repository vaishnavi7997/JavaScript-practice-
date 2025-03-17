const validate = () => {
    const username = document.contact.username.value;
    const password = document.contact.password.value;
    const email = document.contact.email.value;
    const nameError = document.getElementById("nameError")
    const passwordError = document.getElementById("passwordError")
    const emailError = document.getElementById("emailError")
    let nameStatus = false;
    let passwordStatus = false;
    let emailStatus = false;
    const alphaexp = /^[a-zA-Z \s]+$/;
    const pwdExp = /^[0-9]+$/;
    const emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

       //Name Validation
        if (username === ""){
        nameError.textContent = ("Please enter your username");
        }
        else {
             if (username.match(alphaexp)){
                nameError.textContent = ("");
                 nameStatus = true;
                }
            else {
                 nameError.textContent = ("username should only contain alphabets");
                 }
        }

        //password Validation
             if(password === "") {
             passwordError.textContent = ("Please enter your password");
              }
                else {
                 if (password.match(pwdExp)) {
                       passwordError.textContent = ("");
                       passwordStatus = true;
                    }
                    else {
                       passwordError.textContent = (`password can be in alphabets, digits only`);
                     }
                }

                 //Return
    if (nameStatus && passwordStatus && emailStatus) {
        return true;
    }
    else {
        return false;
    }

 }


    
    
