alert("LAN HOUSE SENSACIONAL");
let priceTotal, value, minOfUsing;

do {
  value = Math.abs(Number(prompt("Digite o valor de cada 15 minutos de uso: R$")));
  minOfUsing = Math.abs(Number(prompt("Digite o uso do cliente (em minutos): ")));
} while (!value || !minOfUsing);

if (minOfUsing <= 15) {
  priceTotal = 1;
} else {
  priceTotal = Math.round(minOfUsing / 15) * value;
}

alert(`
===NOTA===
Valor de cada 15 minutos de uso: R$${value.toFixed(2)}

Minutos de uso do Cliente: ${minOfUsing.toFixed(2)}

Preço Total: R$${priceTotal.toFixed(2)}


`);
