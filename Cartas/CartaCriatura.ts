import Carta  from "./Carta.ts";
class CartaCriatura extends Carta{
    ataque: number;
    defensa: number;
    constructor(nombre: string, descripcion: string, costo: number, ataque: number, defensa: number) {
        super(nombre, descripcion, costo);
        this.ataque = ataque;
        this.defensa = defensa;
    }
    public atacar(objetivo: CartaCriatura): string {
        return this.nombre + " ataca a " + objetivo.nombre + " con " + this.ataque + " de ataque.";
    }
    public recibirDano(dano: number): void{
        this.defensa -= dano;
    }
}

export default CartaCriatura;