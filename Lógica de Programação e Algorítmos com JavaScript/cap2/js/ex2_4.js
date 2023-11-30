alert("===RESTAURANTE DO CABA SAFADO===");

let pricePerKG, consumptionPerG, priceTotal;

do {
  pricePerKG = Math.abs(Number(prompt("Preço do Alimento (KG): ")));

  consumptionPerG = Math.abs(Number(prompt("Consumo do Cliente (G): ")));

} while (!pricePerKG || !consumptionPerG);

priceTotal = pricePerKG * (consumptionPerG / 1000);

alert(`Valor da Conta: R$${priceTotal.toFixed(2)}`);
