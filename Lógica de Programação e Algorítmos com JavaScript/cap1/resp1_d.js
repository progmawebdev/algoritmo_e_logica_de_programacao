let prompt = require("prompt")

console.log("Média de Notas Bimestrais");

prompt.start();
prompt.get(['1º Nota', '2º Nota'], (err, result) =>{
    console.log(`Sua Média Bimestral é ${(Number(result['1º Nota']) + Number(result['2º Nota']))/2}`)
})