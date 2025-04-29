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
