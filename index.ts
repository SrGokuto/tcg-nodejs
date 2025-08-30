import { log } from "node:console";
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
    await password({message:"Ingrese su contraseña:"}),
    [] //Array de cartas vacio, pues el jugador no cuenta con cartas al iniciar el juego
);
let cartasArcanas: any[] = new ColeccionArcano().inicializarCartas();
let cartasFuego: any[] = new ColeccionFuego().inicializarCartas();
let cartasNatura: any[] = new ColeccionNatura().inicializarCartas();

while (true){
    console.log(`Bienvenido Jugador: ${jugador.nombre}`)
    const option = await select({
        message: "Seleccione una opción:",
        choices: [
            { name: "Jugar", value: "jugar" },
            { name: "Ver Colecciones", value: "colecciones"},
            { name: "Ver Mis Cartas", value: "miscartas"},
            { name: "Salir", value: "salir" }
        ]
    });

    switch (option) {
        case "miscartas":
            if (jugador.cartas.length === 0) {
                console.log("No tienes cartas. Abre paquetes para obtener cartas.");
            } else {
                console.log("Tus cartas son:");
                console.log("Cartas de tipo criatura:");
                console.table(jugador.cartas.filter(carta => carta instanceof CartaCriatura));
                console.log("Cartas de tipo hechizo:");
                console.table(jugador.cartas.filter(carta => carta instanceof CartaHechizo));
            }
            break;
        case "jugar":
            console.log("Iniciando el juego...");
            console.log("Que tipo de paquete deseas abrir?");
            const paquete = await select({
                message: "Seleccione una opción:",
                choices: [
                    { name: "Paquete Arcano", value: "arcano" },
                    { name: "Paquete de Fuego", value: "fuego"},
                    { name: "Paquete de Natura", value: "natura" },
                    {name: "Volver al menú principal", value: "volver" }
                ]
            });
            switch (paquete) {
                case "arcano":
                    console.log("Has abierto un paquete de la Colección Arcana. Tus cartas son:");
                    const cartasObtenidasArcano = cartasArcanas.sort(() => 0.5 - Math.random()).slice(0, 5);
                    jugador.cartas.push(...cartasObtenidasArcano);
                    console.table(cartasObtenidasArcano);
                    break;
                    
                case "fuego":
                    console.log("Has abierto un paquete de la Colección de Fuego. Tus cartas son:");
                    const cartasObtenidasFuego = cartasFuego.sort(() => 0.5 - Math.random()).slice(0, 5);
                    jugador.cartas.push(...cartasObtenidasFuego);
                    console.table(cartasObtenidasFuego);
                    break;
                    
                case "natura":
                    console.log("Has abierto un paquete de la Colección de Natura. Tus cartas son:");
                    const cartasObtenidasNatura = cartasNatura.sort(() => 0.5 - Math.random()).slice(0, 5);
                    jugador.cartas.push(...cartasObtenidasNatura);
                    console.table(cartasObtenidasNatura);
                    break;
                    
                case "volver":
                    console.log("Volviendo al menú principal...");
                    break;
            }
            break;

        case "colecciones":
            const option = await select({
                message: "Seleccione una colección para ver sus cartas:",
                choices: [
                    { name: "Colección Arcana", value: "arcano" },
                    { name: "Colección de Fuego", value: "fuego" },
                    { name: "Colección de Natura", value: "natura" },
                    { name: "Volver al menú principal", value: "volver" }
                ]
            });
            switch (option) {
                case "arcano":
                    console.log("Cartas en la Colección Arcana:");
                    console.log("Cartas de tipo criatura:");
                    console.table(cartasArcanas.filter(carta => carta instanceof  CartaCriatura));
                    console.log("Cartas de tipo hechizo:");
                    console.table(cartasArcanas.filter(carta => carta instanceof CartaHechizo));
                    break;

                case "fuego":
                    console.log("Cartas en la Colección de Fuego:");
                    console.log("Cartas de tipo criatura:");
                    console.table(cartasFuego.filter(carta => carta instanceof  CartaCriatura));
                    console.log("Cartas de tipo hechizo:");
                    console.table(cartasFuego.filter(carta => carta instanceof CartaHechizo));
                    break;
                    
                case "natura":
                    console.log("Cartas en la Colección de Natura:");
                    console.log("Cartas de tipo criatura:");
                    console.table(cartasNatura.filter(carta => carta instanceof  CartaCriatura));
                    console.log("Cartas de tipo hechizo:");
                    console.table(cartasNatura.filter(carta => carta instanceof CartaHechizo));
                    break;
            break;

        case "salir":
            console.log("Saliendo del juego...");
            process.exit(0);
            break;
        default:
            break;
    }
}
}