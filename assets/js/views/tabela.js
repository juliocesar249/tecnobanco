const tabela=document.querySelector("tbody");function adicionaNaTabela(e){e=parseFloat(e),verificaSeLinhaTem3Valores(tabela)?tabela.innerHTML+=`<tr><td>${e}</td></tr>`:tabela.querySelector("tr:last-child").innerHTML+=`<td>${e}</td>`}function verificaSeLinhaTem3Valores(e){return 3===e.querySelector("tr:last-child").childElementCount}export{adicionaNaTabela};