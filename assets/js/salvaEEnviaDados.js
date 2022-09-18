import { Service } from "./service.js";
import { adicionaNaTabela } from "./tabela.js";
import { mostraResultado } from "./view.js";

/**
* salvadDados
*
* @param {int} resultado valor a ser salvo no indexedDB
*/
export function salvaDados(resultado, viewInfo) {
    Service.abreConexcao()
    .then(connection => {
        const store = connection.transaction(['valoresDeEnergia'], 'readwrite').objectStore('valoresDeEnergia');

        let request = store.add(resultado);

        request.onsuccess = () => {
            console.log('dados incluidos com sucesso');
            adicionaNaTabela(resultado);
        }

        request.onerror = e => {
            console.log(e.target.error)
        }
    });
}

export function importaDados() {
    Service.abreConexcao()
    .then(connection => {
        const store = connection.transaction(['valoresDeEnergia'], 'readwrite').objectStore('valoresDeEnergia');
        let cursor = store.openCursor();

        const valores = [];
        cursor.onsuccess = e => {
            let atual = e.target.result;

            if(atual) {
                let dado = atual.value;

                valores.push(dado);
                
                atual.continue();
            } else {
                for(let i = 0; i < valores.length; i++) {
                    adicionaNaTabela(valores[i]);
                }
            }
        }

        cursor.onerror = e => {
            console.log(e.target.error.name);
        }
    })
}