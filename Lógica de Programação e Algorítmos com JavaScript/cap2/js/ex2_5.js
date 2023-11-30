import {toCapitalize} from '../funcs.js'
let productName, unit, pricePerUnit;
let decimalPieceOfPrice;
let price;
let priceDiscount;
do{
productName = prompt("Digite o nome do produto: ") || 'Produto Indefinido';
unit = Number(prompt("Digite quantas unidades o cliente quer levar: "));
pricePerUnit = Number(prompt("Digite o preço por cada unidade: "));
} while(!unit || !pricePerUnit)

if (unit >= 2){
    decimalPieceOfPrice = Number((pricePerUnit % Math.trunc(pricePerUnit)).toFixed(2));
    price = unit * pricePerUnit;
    priceDiscount = price - (price * decimalPieceOfPrice);
}



alert(`
===NOTA===
Produto: ${productName.trim() ? toCapitalize(productName.trim()) : 'Produto Indefinido'}
Unidades: ${unit}
Preço por Unidade: ${pricePerUnit}

Valor com Desconto: ${priceDiscount}


`)
