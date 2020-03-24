
function validateForm() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

    if( document.surveyform.FirstName.value == "" ) {
       alert( "Please provide your first name!" );
       document.surveyform.FirstName.focus() ;
       return false;
    }

    if( document.surveyform.Lastname.value == "" ) {
        alert( "Please provide your last name!" );
        document.surveyform.Lastname.focus() ;
        return false;
     }

     if( document.surveyform.EMail.value.match(mailformat)) {
        document.surveyform.EMail.focus() ;
        return true;
     }
     else {
         alert("You have entered an invalid email address!");
         document.surveyform.EMail.focus() ;
         return false
     }

     if(document.surveyform.Phone.valuematch(phoneRe)){
document.surveyform.phone.focus();
return true;
     }
     else {
         alert("You have entered an invalid phone number")
         document.surveyform.phone.focus();
         return false
     }
    return( true );
 }