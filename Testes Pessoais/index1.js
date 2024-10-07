/*Faça um programa para calcular o valor de uma viagem. Você terá 5 variáveis, sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustível que está no seu carro;
4 - gasto médio de combustível do carro por km;
5 - distância em km da viagem;
Imprima no console o valor que será gasto para realizar esta viagem.

Faça essa atividade em três etapas: 1 – mais simples utilizando o básico de variáveis; 2 – pegue o
código anterior e implemente condicionais ao código; 3 – pegue o código anterior e implemente funções.

Após os exercícios passados, faça um formulário com HTML, CSS e JavaScript com VALIDAÇÃO.*/

let custoetanol = 4.5;
let custogasolina = 5.8; 
let combustivelescolhido = "gasolina"; /*Altere o nome do combustivel que deseja*/
let eficienciadocarro = 9; 
let totalkm = 1400;  
let custocombustivel = combustivelescolhido === "gasolina " ? custogasolina : custoetanol; 
let valortotaldaviagem = (totalkm / eficienciadocarro ) * custocombustivel;

console.log("o valor gasto na viagem será: R$ " + valortotaldaviagem.toFixed(2));
