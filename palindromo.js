const input1 = document.getElementById("input_number_1");
const getPalindromo = document.getElementById("confirm");
const getLimpar = document.getElementById("clean");


/*const result = document.getElementById("result");*/



getPalindromo.addEventListener("click", function(event){

    let value = input1.value;
    let value1 = input1.value.replace(" ","").trim();
    let resultado = "";
    if(input1.value !== ""){
        var isPalindromo = palindrome(value1);
    if(isPalindromo == true){
    resultado = "É Palindromo!";
    }
    else if(isPalindromo == false){
        resultado = "Não é Palindromo!";
    }
    //result.textContent = (value1+" : "+resultado);

    input1.value = "";
    //result.textContent ="";

    let tabelaPalindromo = document.getElementById("palindromo");
    let row = tabelaPalindromo.insertRow();
    let contaCell = row.insertCell();
    let resultadoCell = row.insertCell();
    contaCell.append(`${value}`);
    resultadoCell.append(`${resultado}`);
    }

});

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len -1 - i]) {
            return false;
        }
    }
    return true;
}

getLimpar.addEventListener("click", function(){

    let tableRows = 
    document
    .getElementById("palindromo")
    .getElementsByTagName("tr");

for(let counter=0; counter < tableRows.length; counter++){
    tableRows.item(2).remove();
}
    //result.textContent ="";
});