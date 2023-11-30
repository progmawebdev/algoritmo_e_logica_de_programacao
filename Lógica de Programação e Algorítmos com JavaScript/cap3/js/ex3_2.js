let neighborhood = prompt("Qual é o seu bairro? ").trim().toLowerCase();
let fee = 5;

switch (neighborhood){
    case 'milagre':
        fee *= 3;
    
    case 'nova olinda':
        fee *= 4;
        
    case 'jaderlândia':
        fee *= 5;
        
    default:
        fee *= 1.5;
}

alert(`A taxa para o bairro ${neighborhood} é ${fee}`)

