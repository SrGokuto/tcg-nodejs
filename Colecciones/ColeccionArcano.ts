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

    public inicializarCartas(): Carta[] {
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
                "Contrahechizo",
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
}

export default ColeccionArcano;
