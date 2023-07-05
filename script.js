let form = document.querySelector("form");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    response();
})

let resultat = document.querySelector("#resultat");
function response(){
    resultat.innerHTML = ` le résulat est : <br> ${input1.value*input2.value/2}  m <sup>2</sup> `
    if(input1.value === "" || isNaN(input1.value)){
        msg1.innerHTML = "Veuillez saisir un nombre"
        resultat.innerHTML = "" ;
    }
    if(input2.value === "" || isNaN(input2.value)){
        msg2.innerHTML = "Veuillez saisir un nombre"
        resultat.innerHTML = "" ;
    }
}