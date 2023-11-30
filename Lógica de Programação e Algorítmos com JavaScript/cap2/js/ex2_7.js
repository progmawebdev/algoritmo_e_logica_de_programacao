import toCapitalize from '../funcs.js';
let names, price;
let priceDiscount;
let halfOfPrice;

function validationStrings(string){
    if(!(string.trim())){
        return 'Produto Indefinido'
    } else{
        return string
    }
}

alert('===SHOPPING DA BILADA===');
do{
names = prompt('Digite o nome do produto: ') || 'Produto Indefinido';
price = Number(prompt(`Digite o preço do produto ${toCapitalize(validationStrings(names))}: `))
} while (!price)
halfOfPrice = price * 0.5
priceDiscount = price * 2 + halfOfPrice;

alert(`
===PROMOÇÃO===
Levando três do(a) ${toCapitalize(validationStrings(names))} você paga: R$${priceDiscount.toFixed(2)}
Valor do Terceiro Produto: R$${halfOfPrice.toFixed(2)}

`)




