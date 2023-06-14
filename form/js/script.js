function validation() {
    var firstnm = document.getElementById("fname");
    var lastnm = document.getElementById("lname");
    var cell = document.getElementById("phone");
    var Email = document.getElementById("email");


    if ( firstnm.value == "" ) {
        document.getElementById("f_name_error").innerHTML="Please fillup the field";
        firstnm.focus();
        return false;
    } else {
        document.getElementById("f_name_error").innerHTML="";
    }

    if ( lastnm.value == "" ) {
        document.getElementById("l_name_error").innerHTML="Please fillup the field";
        lastnm.focus();
        return false;
    } else {
        document.getElementById("l_name_error").innerHTML="";
    }

    if ( cell.value == "" ) {
        document.getElementById("phone_error").innerHTML="Please fillup the field";
        cell.focus();
        return false;
    } else {
        document.getElementById("phone_error").innerHTML="";
    }

    if ( Email.value == "" ) {
        document.getElementById("email_error").innerHTML="Please fillup the field";
        Email.focus();
        return false;
    } else {
        document.getElementById("email_error").innerHTML="";
    }
}