class Jugador{
    public nombre: string;
    private contrasena: string;
    public cartas: any[];

    constructor(nombre: string, contrasena: string, cartas: any[]) {
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.cartas = cartas;
    }
}
export default Jugador;