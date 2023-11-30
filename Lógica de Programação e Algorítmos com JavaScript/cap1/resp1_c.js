let prompt = require('prompt');
let price;

prompt.start();

console.log('Qual é o preço do produto? ');

prompt.get('R$', function(err, result){
    price = result['R$'];
    console.log(`
    Débito: R$${(price * 0.9).toFixed(2)} 
    Crédito: 3x de R$${(price / 3).toFixed(2)}
    `)
})

