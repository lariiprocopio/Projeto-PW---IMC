let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");
function cadastrar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let categoria = document.getElementById("categoria").value;

    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc= calcularIMC(peso,altura)
    let categoriaImc = categoriaIMC(imc)
    
//resultado.innerHTML = "NOME: " + nome + " SOBRENOME: " + sobrenome + ".";
    resultado.innerHTML = ` Nome: ${nome} Sobrenome: ${sobrenome} - Categoria: ${categoria} - IMC: ${imc} - Categoria: ${categoriaImc}`
    
  


    console.log(nome, sobrenome, categoria);
    console,log(imc)
}

function calcularIMC(peso,altura){
    return peso / Math.pow(altura, 2)
   
}
function categoriaIMC(imc){
 if(imc <= 18.5){
 return "Abaixo do normal"
 } else if(imc <= 24.9)
 {
 return "Normal"
 } else if(imc <= 29.9)
 {
 return "Sobrepeso"
 } else if(imc <= 34.9)
 {
return "Obesidade grau I"
 }else if(imc <= 39){
return "Obesidade grau II"
 } else {
return "Obesidade grau III"
 }
}

btn.addEventListener("click", cadastrar);