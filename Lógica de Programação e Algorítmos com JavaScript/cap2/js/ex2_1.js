const iptName = document.querySelector("#ipt-name"),
  btnSend = document.querySelector(".btn-send"),
  output = document.querySelector(".output");

function outputName() {
  let name = iptName.value.trim();

  output.textContent = !name ? 'Digite um Valor Válido' : `Olá ${name}`; 

  
}

btnSend.addEventListener("click", outputName);

btnSend.addEventListener("click", alertName);

/*CONCLUSÃO:
O addEventListener() permite que um 
mesmo objeto com o mesmo listener possa executar 
mais de uma função.

Ao contrário de o elemento HTML, que com a propriedade
responsável pelo evento escolhido não executa mais de
duas funções
*/
/*
btnSend.onclick = alertName;
btnSend.onclick = outputName;
*/
