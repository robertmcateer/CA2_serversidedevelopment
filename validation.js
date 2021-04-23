
function price_validation(){
    'use strict';
    var priceid_name = document.getElementById("priceid");
    var priceid_value = document.getElementById("priceid").value;
    var priceid_length = priceid_value.length;
    var letters = /^\d+(,\d{3})*(\.\d{1,2})?$/g;
    if(!priceid_value.match(letters))
    {
    document.getElementById('price_err').innerHTML = 'Price must be in format ££.££';
    document.getElementById('price_err').style.color = "#FF0000";
    passid_name.focus();
    
    }
    else
    {
    document.getElementById('price_err').innerHTML = 'Valid price';
    document.getElementById('price_err').style.color = "#00AF33";
    }
    }
// manufacturer validation
    function man_validation(){
        'use strict';
        var manid_name = document.getElementById("manid");
        var manid_value = document.getElementById("manid").value;
        var manid_length = manid_value.length;
        var letters = /^[A-Z]{2}[0-9]{2}/g;
        if(!manid_value.match(letters))
        {
        document.getElementById('man_err').innerHTML = 'Must be in formatt LL66 & length 4';
        document.getElementById('man_err').style.color = "#FF0000";
        passid_name.focus();
        
        }
        else
        {
        document.getElementById('man_err').innerHTML = 'Valid';
        document.getElementById('man_err').style.color = "#00AF33";
        }
        }


        // name validation
    function name_validation(){
        'use strict';
        var nameid_name = document.getElementById("nameid");
        var nameid_value = document.getElementById("nameid").value;
        var nameid_length = nameid_value.length;
        var letters = /^[a-zA-Z]+/g;
        if(!nameid_value.match(letters))
        {
        document.getElementById('name_err').innerHTML = 'Must be all letters';
        document.getElementById('name_err').style.color = "#FF0000";
        passid_name.focus();
        
        }
        else
        {
        document.getElementById('name_err').innerHTML = 'Valid';
        document.getElementById('name_err').style.color = "#00AF33";
        }
        }

    
   function password_validation(){
    'use strict';
    var passwordid_name = document.getElementById("passwordid");
    var passwordid_value = document.getElementById("passwordid").value;
    var passwordid_length = passwordid_value.length;
    var letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!passwordid_value.match(letters))
    {
    document.getElementById('password_err').innerHTML = 'Must Be 8 characters with at least - 1 Captial, 1 Number and Special Character';
    document.getElementById('password_err').style.color = "#FF0000";
    passid_name.focus();
    
    }
    else
    {
    document.getElementById('password_err').innerHTML = 'Valid';
    document.getElementById('password_err').style.color = "#00AF33";
    }
    }

        
    // function search_validation(){
    //     'use strict';
    //     var searchid_name = document.getElementById("searchid");
    //     var searchid_value = document.getElementById("searchid").value;
    //     var searchid_length = searchid_value.length;
    //     if(searchid_name != searchid_value)
    //     {
           
    //     document.getElementById('search_err').innerHTML = 'Must be in formatt LL66 & length 4';
    //     document.getElementById('search_err').style.color = "#FF0000";
    //     searchid_name.focus();
        
    //     }
       
    //     }
    