function validateform(form){
    
    var  email=form.email.value;
    var email_re=/\S+@\S+\.\S+/;
    var pas1=form.pswd.value;
    var pas2=form.pswd1.value;
    var phone=form.phone.value;
    //document.write(pas1);
   // document.write(mail);
    var phone_r = /^\d{10}$/;
    var pswd_r = /^(?=.*\d)(?=.*[!$%^&*@#])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    
   if(email_re.test(email)==false){
        alert("Please enter a valid mail");
        return false;
    }
    else if(phone_r.test(phone) == false){
        alert("Invalid number..must be 10 digits ");
        return false;
    }
    else if(pswd_r.test(pas1)==false){
        alert("Password should contain atleast on charater on number an lowercase letter and on uppercase letter");
        return false;
    }
    else if (pas1 != pas2) { 
    alert ("\nPassword did not match: Please try again...");
    return false; 
    } 
  }
 