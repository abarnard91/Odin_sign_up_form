 document.getElementById("phone_number").addEventListener('input',function(e){
    let input = e.target.value.replace(/\D/g, '');
    let formattedInput = "";

    if (input.length > 0){
        formattedInput += "(" + input.substring(0, 3);
    }
    if (input.length >= 4){
        formattedInput += ")-" + input.substring(3,6);
    }
    if (input.length >= 7){
        formattedInput += "-" + input.substring(6,10)
    }
    e.target.value = formattedInput;

}) 

document.getElementById("confirm_password").addEventListener('input',function(){ 
    compare_passwords();
})
function compare_passwords(){
    let user_password = document.getElementById("user_password");
    let confirmed_password = document.getElementById("confirm_password");
    confirmed_password.pattern = user_password.value;
}