# Informe sobre TypeScript y (POO) 

## 1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?
TypeScript es un *superset de JavaScript* desarrollado por Microsoft que agrega *tipado estático y características avanzadas* para el desarrollo a gran escala.  
La principal diferencia es que *JavaScript es dinámico* (no valida tipos en tiempo de compilación), mientras que *TypeScript detecta errores antes de ejecutar el código* gracias a su sistema de tipos.

---

## 2. ¿Qué ventajas ofrece TypeScript para trabajar con Programación Orientada a Objetos?
- Soporte completo para *clases, objetos, herencia, polimorfismo, interfaces y abstracción*.
- *Tipado fuerte*, lo que reduce errores.
- *Mejor autocompletado* y documentación dentro de editores como VS Code.
- *Escalabilidad* para proyectos grandes.
- Compatibilidad con *ES6+* y posibilidad de compilar a JavaScript estándar.

---

## 3. ¿Qué son los modificadores de acceso (public, private, protected)?
Sirven para *controlar la visibilidad de atributos y métodos* dentro de una clase.

- *public*: accesible desde cualquier lugar (por defecto).  
- *private*: solo accesible dentro de la clase.  
- *protected*: accesible dentro de la clase y sus subclases.

*Ejemplo:*
```ts
class Persona {
  public nombre: string;
  private edad: number;
  protected genero: string;

  constructor(nombre: string, edad: number, genero: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
}
```

---

## 4. ¿Qué es un readonly y para qué se usa?
Readonly define propiedades que *solo se pueden asignar una vez*, normalmente en el constructor.  
Sirve para evitar modificaciones accidentales.
El modificador readonly se usa para propiedades que se asignan solo al crear la instancia y no pueden modificarse luego, garantizando inmutabilidad en esas propiedades.

```ts
class Usuario {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
```

---

## 5. ¿Cómo se definen clases y objetos en TS?
En TypeScript se usan las palabras clave *class* para definir una clase y *new* para crear un objeto.
En TypeScript, una clase es un plano o plantilla para crear objetos, definida con la palabra clave class, que establece las propiedades *(datos)* y métodos *(comportamientos)* que tendrán los objetos creados a partir de ella. Un objeto es una instancia concreta de una clase, una entidad individual que posee los atributos y métodos definidos por su clase. 

```ts
class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

let perro = new Animal("Firulais");
```

---

## 6. ¿Qué son los constructores y para qué sirven?
El *constructor* es un método especial que se ejecuta al crear un *objeto* inicializando sus propiedades.
Un constructor es un método especial que se ejecuta al crear una instancia de una clase. Sirve para inicializar los atributos del objeto con valores recibidos.

```ts
class Coche {
  marca: string;
  constructor(marca: string) {
    this.marca = marca;
  }
}
```

---

## 7. ¿Qué es la herencia en TS y cómo se implementa *(extends / super)*?
La herencia permite que una clase **(hija)** *obtenga atributos y métodos* de otro 
**(padre)**. 
Se usa *extends* para heredar y *super ()* para llamar al constructor de la clase padre.

```ts
class Animal {
  constructor(public nombre: string) {}
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }
}
```

---

## 8. ¿Qué significa polimorfismo en el contexto de TS?
El *polimorfismo* es la capacidad de que *métodos con el mismo nombre se comporte de forma diferente* según el objeto que los invoque.
El polimorfismo permite tratar objetos de diferentes clases que comparten una interfaz o clase base de manera uniforme. En TS se logra por herencia o con interfaces.

```ts
class Animal { hablar() { console.log("Sonido genérico"); } }
class Perro extends Animal { hablar() { console.log("Guau!"); } }
class Gato extends Animal { hablar() { console.log("Miau!"); } }
```

---

## 9. ¿Qué son las clases abstractas y qué diferencia tienen con una clase normal?
- Una *clase abstracta* no se puede instanciar directamente.  
- Se usa como modelo para que otras clases la implementen. 
- Puede contener *métodos abstractos* (sin implementación).
Las clases abstractas no pueden ser instanciadas directamente y pueden contener métodos abstractos que deben ser implementados en subclases. A diferencia de clases normales que pueden ser instanciadas y todos sus métodos definidos.

```ts
abstract class Figura {
  abstract area(): number;
}
```

---

## 10. ¿Qué es una interface en TS y en qué se diferencia de una clase abstracta?
Una interface solo describe la forma o contrato que las clases deben cumplir *(métodos y propiedades sin implementación)*, mientras que una clase abstracta puede tener implementación de métodos y definir estado *(propiedades)*.
- Una *interface* solo define la *forma o contrato* que una clase u objeto debe seguir.
- Una *clase abstracta* puede contener atributos, métodos implementados y métodos abstractos.

```ts
interface Vehiculo {
  ruedas: number;
  mover(): void;
}

class Coche implements Vehiculo {
  ruedas = 4;
  mover() { console.log("Avanzando..."); }
}
```

---

## 11. Ejemplo mínimo de cada pilar de POO en TS *(una línea de código por concepto)*.
- *Abstracción*
```ts
abstract class Figura { abstract area(): number; }
```
- *Encapsulamiento*
```ts
class Banco { private saldo: number = 0; }
```
- *Herencia*
```ts
class Hijo extends Padre {}
```
- *Polimorfismo*
```ts
animal.hablar("Miau"); 
```

---

## 12. Investigar y realizar la configuración de TypeScript con Node JS y VS Code.
- Descargar node.js 
- Instalar TypeScript *(npm install typescript --save-dev)*
- Crear configuración *(npx tsc --init)*


