let idade = 19

if(idade > 18 ){
    console.log("voce é maior de 18")
} else{
    console.log("você não é maior de idade")
}
console.log(idade)

let num = 18
let hum = true

if (num >= 18 && hum === true){
    console.log ("Você é maior de idade e também é humano")
} else{
    console.log ("Você não é maior de idade e não é humano")
}


let mês = "Dezembro"
if ((mês === "Dezembro") || (mês === "Janeiro")){
    console.log("Você faz aniversário em Dezembro ou Janeiro")
} else{
    console.log("Você não faz anirversário nesses meses")
}


let nome = "romario"
if(nome.substring((0,1)) || ("r")){
console.log("seu nome começa com a letra r")
}
else{
    console.log("Seu nome não começa com a letra r!")
}


let Nome = "ALan"
let sobreName = "Fernandes"


if(Nome.substring(0,1) === ("L") || (sobreName.length >6) ){
    console.log("Seu sobrenome tem mais de 6 letras ou começa com a letra L  ")
} else{
    console.log("Seu nome NÃO comeca com a letra L ou não tem mais de 6 letras")
}


