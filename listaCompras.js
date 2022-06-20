let refri = prompt("digite aqui o valor total dos refrigerantes")
let macarrao = prompt("digite aqui o valor total do Macarrão")
let ervilha = prompt("digite aqui o valor total das ervilhas")
let arroz = prompt("digite aqui o valor total do arroz")
let feijao = prompt("digite aqui o valor total do feijão")
let vinho = prompt("digite aqui o valor total dos vinhos")



let valorTotal = Number (refri + macarrao + ervilha + arroz + feijao + vinho)
let seValorImpar = 387.65
let seValorPar = 177.65

if (valorTotal % 2 == 0) {

    alert (`o valor de: ${seValorPar/2} deverá ser pago por você e o valor de: ${(seValorPar/2) + vinho} deverá ser pago pelo seu amigo`)
} else {

    alert(`cada um deverá pagar: ${seValorImpar}`)
} 

