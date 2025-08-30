import Carta from "../Cartas/Carta.ts";
import CartaCriatura from "../Cartas/CartaCriatura.ts";
import CartaHechizo from "../Cartas/CartaHechizo.ts";

class ColeccionNatura {
    private cartas: Carta[];
    private nombre: string;

    constructor() {
        this.nombre = "Colección de Natura";
        this.cartas = this.inicializarCartas();
    }

    public inicializarCartas(): Carta[] {
        return [
            // Criaturas de Natura
            new CartaCriatura(
                "Ent Milenario",
                "Un árbol ancestral con consciencia propia",
                6,
                4,
                8
            ),
            new CartaCriatura(
                "Lobo del Bosque",
                "Un feroz lobo protector de la naturaleza",
                3,
                5,
                3
            ),
            new CartaCriatura(
                "Dríade Guardiana",
                "Un espíritu del bosque que protege los árboles",
                4,
                3,
                5
            ),
            new CartaCriatura(
                "Oso Gigante",
                "Un oso de tamaño descomunal y fuerza brutal",
                5,
                6,
                6
            ),
            new CartaCriatura(
                "Hada del Bosque",
                "Una pequeña hada con poderes curativos",
                2,
                2,
                2
            ),

            // Hechizos de Natura
            new CartaHechizo(
                "Crecimiento Acelerado",
                "Hace crecer rápidamente la vegetación",
                3,
                "Otorga +3/+3 a una criatura aliada"
            ),
            new CartaHechizo(
                "Enredar",
                "Las plantas capturan al enemigo",
                2,
                "Impide que una criatura enemiga ataque durante 2 turnos"
            ),
            new CartaHechizo(
                "Regeneración",
                "Restaura la vitalidad natural",
                4,
                "Restaura 6 puntos de vida y cura efectos negativos"
            ),
            new CartaHechizo(
                "Tormenta de Espinas",
                "Invoca una lluvia de espinas afiladas",
                5,
                "Inflige 4 puntos de daño a todos los enemigos"
            ),
            new CartaHechizo(
                "Llamada de la Manada",
                "Convoca a los animales del bosque",
                6,
                "Invoca 3 Lobos del Bosque al campo de batalla"
            )
        ];
    }
}

export default ColeccionNatura;
