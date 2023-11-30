import { toCapitalize } from "../funcs.js";
function calInflow(price){
    return price * 0.5;
}

function calSale(price){
    return (price * 0.50)/12;
}

// ler modelo e preço do veículo;
// Saída: entrada (50%) e saldo em 12x;


// model não pode ser Null

let model, price, inflow, sale;

alert("Revenda de Carros");

do{
    model = prompt("Digite o modelo do seu veículo: ") || '(Marca Indefinida)';
    price = Number(prompt('Digite o Preço do seu veículo: '));
} while(!price)

    inflow = calInflow(price);
    sale = calSale(price);

    alert(`O Veículo ${model.trim() ? toCapitalize(model.trim()) : '(Marca Indefinida)'} tem entrada de R$${inflow.toFixed(2)} e 12 parcelas de R$${sale.toFixed(2)}, SEM JUROS!!!`);
