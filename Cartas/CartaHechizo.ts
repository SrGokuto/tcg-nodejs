import Carta  from "./Carta.ts";
class CartaHechizo extends Carta{
    efecto: string;
    constructor(nombre: string, descripcion: string, costo: number, efecto: string) {
        super(nombre, descripcion, costo);
        this.efecto = efecto;
    }
    public activarEfecto():string {
        return "Activando la carta hechizo: " + this.nombre + " con efecto " + this.efecto;
    }
}

export default CartaHechizo;