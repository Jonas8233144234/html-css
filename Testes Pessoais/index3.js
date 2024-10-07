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

function calcularvalorviagem(custoetanol, custogasolina, combustivelescolhido, eficienciadocarro, totalkm) {
    let custocombustivel;

    if (combustivelescolhido === "gasolina") {
        custocombustivel = custogasolina;
    } else if (combustivelescolhido === "etanol") {
        custocombustivel = custoetanol;
    } else {
        console.log("Tipo de combustível inválido!");
        return;
    }

    let valortotaldaviagem = (totalkm / eficienciadocarro) * custocombustivel;
    return valortotaldaviagem;
}

let custoetanol = 4.5;
let custogasolina = 5.8;
let combustivelescolhido = "gasolina"; /*Altere o nome do combustivel que deseja*/
let eficienciadocarro = 9;
let totalkm = 1400;

let valorViagem = calcularvalorviagem(custoetanol, custogasolina, combustivelescolhido, eficienciadocarro, totalkm);

if (valorViagem !== undefined) {
    console.log("O valor gasto na viagem será: R$ " + valorViagem.toFixed(2));
}
