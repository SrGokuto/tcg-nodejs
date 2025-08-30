import Carta from "../Cartas/Carta.ts";
import CartaCriatura from "../Cartas/CartaCriatura.ts";
import CartaHechizo from "../Cartas/CartaHechizo.ts";

class ColeccionFuego {
    private cartas: Carta[];
    private nombre: string;

    constructor() {
        this.nombre = "Colección de Fuego";
        this.cartas = this.inicializarCartas();
    }

    private inicializarCartas(): Carta[] {
        return [
            // Criaturas de Fuego
            new CartaCriatura(
                "Dragón de Llamas",
                "Un poderoso dragón que escupe fuego devastador",
                8,
                9,
                7
            ),
            new CartaCriatura(
                "Elemental de Fuego",
                "Un ser de puro fuego que arde eternamente",
                5,
                6,
                4
            ),
            new CartaCriatura(
                "Fénix Ardiente",
                "Un ave mítica que renace de sus cenizas",
                7,
                5,
                5
            ),
            new CartaCriatura(
                "Salamandra Ígnea",
                "Una criatura reptil adaptada al calor extremo",
                3,
                4,
                3
            ),

            // Hechizos de Fuego
            new CartaHechizo(
                "Bola de Fuego",
                "Lanza una devastadora esfera de llamas",
                4,
                "Inflige 5 puntos de daño a un objetivo"
            ),
            new CartaHechizo(
                "Lluvia de Meteoros",
                "Invoca meteoros ardientes del cielo",
                6,
                "Inflige 3 puntos de daño a todas las criaturas enemigas"
            ),
            new CartaHechizo(
                "Escudo de Llamas",
                "Crea una barrera protectora de fuego",
                3,
                "Otorga +2 de defensa y daño de retorno por fuego"
            ),
            new CartaHechizo(
                "Explosión Solar",
                "Libera la energía del sol",
                8,
                "Inflige 8 puntos de daño a un objetivo y 2 a criaturas adyacentes"
            )
        ];
    }

    public obtenerCartas(): Carta[] {
        return [...this.cartas];
    }

    public obtenerCartaPorNombre(nombre: string): Carta | undefined {
        return this.cartas.find(carta => carta.nombre === nombre);
    }

    public obtenerCartasPorCosto(costo: number): Carta[] {
        return this.cartas.filter(carta => carta.costo === costo);
    }

    public obtenerCriaturas(): CartaCriatura[] {
        return this.cartas.filter(carta => carta instanceof CartaCriatura) as CartaCriatura[];
    }

    public obtenerHechizos(): CartaHechizo[] {
        return this.cartas.filter(carta => carta instanceof CartaHechizo) as CartaHechizo[];
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerTamaño(): number {
        return this.cartas.length;
    }

    public mostrarColeccion(): string {
        let resultado = `=== ${this.nombre} ===\n`;
        resultado += `Total de cartas: ${this.cartas.length}\n\n`;
        
        resultado += "CRIATURAS:\n";
        this.obtenerCriaturas().forEach(criatura => {
            resultado += `- ${criatura.nombre} (${criatura.costo} maná) - ATK: ${criatura.ataque}, DEF: ${criatura.defensa}\n`;
        });
        
        resultado += "\nHECHIZOS:\n";
        this.obtenerHechizos().forEach(hechizo => {
            resultado += `- ${hechizo.nombre} (${hechizo.costo} maná) - ${hechizo.efecto}\n`;
        });
        
        return resultado;
    }
}

export default ColeccionFuego;
