/**
 * mostraResultado
 * @param {int} resultado Resultado da conta
 * @param {object} viewInfo Informações sobre a vizualização
 */
export function mostraResultado(resultado, viewInfo) {
    viewInfo.place.innerHTML = `
        <p class="result__texto">R$${resultado.toString().replace('.', ',')}</p>
    `
}