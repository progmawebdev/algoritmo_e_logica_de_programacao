alert("===Locadora de Filmes===");
let title = prompt("Digite o título do filme: ");
let duration = prompt("Digite a duração do filme em minutos: ");

let hours = Math.trunc(duration / 60);
//let minutos = Math.floor(60 * (Math.abs(Math.trunc(duration / 60) - (duration / 60)).toFixed(2)))
let minutes = duration % 60; // 150 % 60 = 30


alert(`O Filme ${title} tem ${hours} horas e ${minutes} minutos`);


