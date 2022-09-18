export class Service {

    constructor() {
        throw new Error('Não é possível criar uma instância desta classe.');
    }

    static abreConexcao() {
        return new Promise((resolve, reject) => {
            const openRequest = window.indexedDB.open('valoresDeEnergia', 1);
            let connection;

            openRequest.onupgradeneeded = e => {
                console.log('Database criado/atualizdo');

                let minhaConnection = e.target.result;

                if(minhaConnection.objectStoreNames.contains('valoresDeEnergia')) {

                    minhaConnection.deleteObjectStore('valores');
                }
                minhaConnection.createObjectStore('valoresDeEnergia', {autoIncrement: true});
            };

            openRequest.onsuccess = e => {

                console.log('Conexão obtida com sucesso');

                connection = e.target.result;
                resolve(connection);
            };

            openRequest.onerror = e => {
                reject(e.target.error);
            };
        });
    } 
}