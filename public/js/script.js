let pwd = document.getElementById("pass");
let phone = document.getElementById("phone");    
    

function validate(){
    let email = document.getElementById("email");
    if(email.value=="" || pwd.value==""){
        alert("Fields cannot be empty.");
        return false;
    }
    else{
        let pho= /^([0-9]{3})([\.\- ])([0-9]{3})([\.\- ])([0-9]{4})$/;
        let exp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(exp.test(email.value)){
            console.log("correct");
            return true;
        }
        else{
            alert("Please check the Email");
            return false;
        }
    }
}
function validate1(){
    let email = document.getElementById("email");
    if(email.value=="" || pwd.value=="" || phone.value=="" ){
        alert("Fields cannot be empty.");
        return false;
    }
    else{
        let pho= /^\d{10}$/;
        let exp1 = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(exp1.test(email.value) && pho.test(phone.value)){
            console.log("correct");
            return true;
        }
        else{
            alert("Please check the Email or phone number");
            return false;
        }
    }
}
function passwordChanged() {
        var strength = document.getElementById('strength');
        let strongRegex = /([a-z]+[A-z]+[0-9]+)/;
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = /(?=.{8,}).*/;
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Poor!</span>';
        }
}

