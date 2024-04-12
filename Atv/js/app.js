let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");

let arrPessoa = []

function cadastrar() {

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;

    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc= calcularIMC(peso,altura)
    let categoriaImc = categoriaIMC(imc)


    const pessoa={
        nome: nome,
        categoria: categoria,
        altura: altura,
        peso: peso,
        imc: calcularIMC(peso, altura),
        categoriaImc: categoriaIMC(calcularIMC(peso, altura)),
    }
     
    arrPessoa.push(pessoa)
    console.log(arrPessoa)
    imprimir()
   
 
    console.log(imc);
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
function imprimir(){
  for(let i = 0; i< arrPessoa.length ; i++) {
    resultado.innerHTML += `

<ul>
    <td>${arrPessoa[i].nome}</td>
    <td> ${arrPessoa[i].categoria}</td>
    <td>${arrPessoa[i].altura}</td>
    <td>${arrPessoa[i].peso}</td>
    <td>${arrPessoa[i].imc.toFixed(2)}</td>
    <td>${arrPessoa[i].categoriaImc}</td>
    
</ul>
    `
}
}
btn.addEventListener("click", cadastrar);