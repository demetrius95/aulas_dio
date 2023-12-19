/*
Faça um programa para calcular o preço de uma viagem.

Você terá três variáveis:
    1 - O preço do combustível,
    2 - Gasto médio de combustível do carro por Km,
    3 - Distância da Viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/
console.log('Olá, Mundo!')

const preco = 5;
const KmPorL = 12;
const distanciaEmKm = 2200;

const custo = preco * distanciaEmKm / KmPorL

console.log(custo.toFixed(2))
