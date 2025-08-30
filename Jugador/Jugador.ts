class Jugador{
    public nombre: string;
    private contrasena: string;

    constructor(nombre: string, contrasena: string) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}
export default Jugador;