const tabela = document.querySelector('tbody');

/**
 * adicionaNaTabela
 * @param {int} valor Valor a ser adicionado na tabela.
 */
export function adicionaNaTabela(valor) {
    valor = parseFloat(valor);
    !verificaSeLinhaTem3Valores(tabela) ? (() => {
        tabela.querySelector('tr:last-child').innerHTML += `<td>${valor}</td>`;
    })(): (() => {
        tabela.innerHTML += `<tr><td>${valor}</td></tr>`;
    }
    )();
}

function verificaSeLinhaTem3Valores(tabela) {
    const ultimaTr = tabela.querySelector('tr:last-child');
    return ultimaTr.childElementCount === 3;
}
