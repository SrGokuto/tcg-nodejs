import Carta  from "./Carta.ts";
class CartaHechizo extends Carta{
    efecto: string;
    constructor(nombre: string, descripcion: string, costo: number, efecto: string) {
        super(nombre, descripcion, costo);
        this.efecto = efecto;
    }
}

export default CartaHechizo;