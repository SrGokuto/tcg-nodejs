import Carta from "./Cartas/Carta.ts";
import CartaCriatura from "./Cartas/CartaCriatura.ts";
import CartaHechizo from "./Cartas/CartaHechizo.ts";
import ColeccionArcano from "./Colecciones/ColeccionArcano.ts"; 
import ColeccionFuego from "./Colecciones/ColeccionFuego.ts";
import ColeccionNatura from "./Colecciones/ColeccionNatura.ts";
import Jugador from "./Jugador/Jugador.ts";
import {input, password, select} from "@inquirer/prompts"

const jugador = new Jugador(
    await input({message:"Ingrese su nombre de usuario:"}),
    await password({message:"Ingrese su contraseña:"})
);

while (true){
    console.log(`Bienvenido Jugador: ${jugador.nombre}`)
    const option = await select({
        message: "Seleccione una opción:",
        choices: [
            { name: "Jugar", value: "jugar" },
            { name: "Ver Colecciones", value: "colecciones"},
            { name: "Salir", value: "salir" }
        ]
    });

    switch (option) {
        case "jugar":
            // Lógica para jugar
            break;

        case "colecciones":
            // Lógica para ver colecciones
            break;

        case "salir":
            console.log("Saliendo del juego...");
            process.exit(0);
            break;
        default:
            break;
    }
}