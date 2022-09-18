export class Calculos {
    constructor() {
        throw new Error('Não é possível criar uma nova instância desta classe.');
    }
    
    
    static jurosSimples(c, i, t) {
        return c * i * t;
    }
    
    static jurosComposto(c, i, t) {
        return c * Math.pow((1 + i), t)
    }
}
