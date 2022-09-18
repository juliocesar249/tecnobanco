import { importaDados, salvaDados } from "./salvaEEnviaDados.js";
import { mostraResultado } from "./view.js";
const form = document.getElementById('energiaForm');
const visualizacao = document.querySelector('#energiaResult');
form.addEventListener('submit', e => {e.preventDefault(); calculaEnergia()});
importaDados();

function calculaEnergia() {
    const primeiroValorDaVoltagem = parseInt(form.querySelector('#valorDaPrimeiraVoltagem').value);
    const segundoValorDaVoltagem = parseInt(form.querySelector('#valorDaSegundaVoltagem').value);
    const taxaPorVoltagem = parseInt(form.querySelector('#taxaPorWatt').value);
    const resultado = ((Math.abs(segundoValorDaVoltagem - primeiroValorDaVoltagem)) * (taxaPorVoltagem / 100) * 100).toFixed(2);
    salvaDados(segundoValorDaVoltagem);
    mostraResultado(resultado, { type: "energia", place: visualizacao});
}