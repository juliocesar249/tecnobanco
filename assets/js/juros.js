import { Calculos } from "./Calculos.js";
import { mostraResultado } from "./view.js";

const form = document.getElementById('jurosForm');
const visualizacao = document.querySelector('#jurosResult')
form.addEventListener('submit', event => { event.preventDefault(); calculaJuros()})

function calculaJuros() {
    const juros = {
        capital: parseFloat(form.querySelector('#capital').value),
        taxa: parseFloat(form.querySelector('#taxaDeJuros').value.replace(',', '.')),
        tempo: parseFloat(form.querySelector('#tempo').value),
        tipo: form.querySelector('option:checked').value,
    };

    const totalParaPagar = Calculos.jurosComposto(juros.capital, juros.taxa, juros.tempo).toFixed(2);
    
    mostraResultado(totalParaPagar, {type: "juros", place: visualizacao});
}
