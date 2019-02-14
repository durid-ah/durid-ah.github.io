function validatePhone(val, id) {
    if (val.length > 12)
    {
        document.getElementById(id).innerHTML ="Invalid Phone Number";
    }
    else if (val.search(/\d{3}-\d{3}-\d{4}/) >= 0) {
        document.getElementById(id).innerHTML =" ";
    }
    else {
        document.getElementById(id).innerHTML ="Invalid Phone Number";
    }
}

function getItemTotal()
{
    var items = ["Mars", "Snickers", "Twix", "MilkyWay"];
    var sum = 0;
    items.forEach((element) => {
        var item = document.getElementById(element);
        if(item.checked)
            sum += Number(item.value);
    });
    document.getElementById('total').innerHTML = sum.toFixed(2);
}

function validateCardNum(val, id) {
    if (val.length > 16)
    {
        document.getElementById(id).innerHTML ="Invalid Card Number";
    }
    else if (val.search(/^\d{16}/) >= 0) {
        document.getElementById(id).innerHTML =" ";
    }
    else {
        document.getElementById(id).innerHTML ="Invalid Card Number";
    }
}

function validateExpDate(val, id) {
    var values = val.split("/");
    if (val.length > 5)
    {
        document.getElementById(id).innerHTML ="Invalid Expiration Date";
    }
    else if (val.search(/\d{2}\/\d{2}/) < 0) {
        document.getElementById(id).innerHTML ="Invalid Expiration Date";
    }
    else if (val.search(/\d{2}\/\d{2}/) >= 0 && values[0] > 1 && values[0] <= 12 && values[1] >= 17 ) {
        document.getElementById(id).innerHTML =" ";
    }
    else if (values[0] < 1 || values[0] > 12) {
        document.getElementById(id).innerHTML ="Invalid Expiration Date";
    }
    else if (values[1] < 17) {
        document.getElementById(id).innerHTML ="Invalid Expiration Date";
    }
    else {
        document.getElementById(id).innerHTML ="Invalid Expiration Date";
    }
}

function checkEmptyFields() {
    var fields = ["FirstName", "LastName", "Address", "PhoneNum", "CardNum", "ExpirationDate"];
    var focus = false;
    fields.forEach((field) => {
        var fieldObj = document.getElementsByName(field)[0];
        if(fieldObj.value == "") {
            document.getElementById(field + "Error").innerHTML = "*Required Field";
            //set focus on first empty field
            if (!focus) {
                focus = true;
                fieldObj.focus();
            }

        }
        else
            document.getElementById(field + "Error").innerHTML = "";
    });
}