class Carta {
    nombre: string;
    descripcion: string;
    costo: number;
    constructor(nombre: string, descripcion: string, costo: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
    }
    public usar():string {
        return "Usando la carta: " + this.nombre;
    }
}

export default Carta;