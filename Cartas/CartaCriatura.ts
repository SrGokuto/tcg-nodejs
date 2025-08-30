import Carta  from "./Carta.ts";
class CartaCriatura extends Carta{
    ataque: number;
    defensa: number;
    constructor(nombre: string, descripcion: string, costo: number, ataque: number, defensa: number) {
        super(nombre, descripcion, costo);
        this.ataque = ataque;
        this.defensa = defensa;
    }
}

export default CartaCriatura;