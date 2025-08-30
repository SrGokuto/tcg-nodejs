import Carta from "../Cartas/Carta.ts";
import CartaCriatura from "../Cartas/CartaCriatura.ts";
import CartaHechizo from "../Cartas/CartaHechizo.ts";

class ColeccionArcano {
    private cartas: Carta[];
    private nombre: string;

    constructor() {
        this.nombre = "Colección Arcana";
        this.cartas = this.inicializarCartas();
    }

    private inicializarCartas(): Carta[] {
        return [
            // Criaturas Arcanas
            new CartaCriatura(
                "Mago Supremo",
                "Un hechicero de poder inmenso y sabiduría ancestral",
                7,
                5,
                4
            ),
            new CartaCriatura(
                "Golem de Cristal",
                "Una construcción mágica hecha de cristales arcanos",
                5,
                3,
                7
            ),
            new CartaCriatura(
                "Espíritu Arcano",
                "Un ser etéreo formado de pura energía mágica",
                4,
                4,
                3
            ),
            new CartaCriatura(
                "Familiar Mágico",
                "Una criatura que amplifica el poder mágico de su amo",
                2,
                2,
                1
            ),
            new CartaCriatura(
                "Archimago",
                "El maestro de todas las escuelas de magia",
                9,
                6,
                6
            ),

            // Hechizos Arcanos
            new CartaHechizo(
                "Rayo Arcano",
                "Dispara un rayo de energía mágica pura",
                3,
                "Inflige 4 puntos de daño mágico que ignora armadura"
            ),
            new CartaHechizo(
                "Teletransporte",
                "Permite el viaje instantáneo a través del espacio",
                2,
                "Mueve una criatura aliada a cualquier posición del campo"
            ),
            new CartaHechizo(
                "Contrahechio",
                "Anula los efectos mágicos enemigos",
                4,
                "Cancela el último hechizo lanzado por el oponente"
            ),
            new CartaHechizo(
                "Multiplicación Mágica",
                "Crea copias temporales de una criatura",
                6,
                "Crea una copia temporal de una criatura aliada por 3 turnos"
            ),
            new CartaHechizo(
                "Prisión Dimensional",
                "Encierra al enemigo en otra dimensión",
                8,
                "Remueve una criatura enemiga del juego permanentemente"
            ),
            new CartaHechizo(
                "Absorber Maná",
                "Drena la energía mágica del oponente",
                1,
                "Roba 2 puntos de maná al oponente y los añade a tu reserva"
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

    public obtenerHechizosDeControl(): CartaHechizo[] {
        return this.obtenerHechizos().filter(hechizo => 
            hechizo.efecto.toLowerCase().includes('cancela') || 
            hechizo.efecto.toLowerCase().includes('remueve') ||
            hechizo.efecto.toLowerCase().includes('prisión')
        );
    }

    public obtenerHechizosDeUtilidad(): CartaHechizo[] {
        return this.obtenerHechizos().filter(hechizo => 
            hechizo.efecto.toLowerCase().includes('mueve') || 
            hechizo.efecto.toLowerCase().includes('roba') ||
            hechizo.efecto.toLowerCase().includes('copia')
        );
    }

    public obtenerCartasDeBajoCoste(): Carta[] {
        return this.cartas.filter(carta => carta.costo <= 3);
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

export default ColeccionArcano;
