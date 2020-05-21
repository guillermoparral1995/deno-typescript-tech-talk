
class Persona {
  nombre: string; // atributo
  private dni: number;
  gritar: () => void;
  constructor(nombre: string, dni: number) {
    this.nombre = nombre;
    this.dni = 39245500;
  }
}

class Programador extends Persona {
  constructor(nombre: string, dni: number) {
    super(nombre, dni);
  }

  gritar: () => void = () => console.log('LA P*** MADRE NO ME ANDA NADA');
}

class Estudiante extends Persona {
  constructor(nombre: string, dni: number) {
    super(nombre, dni);
  }

  gritar: () => void = () => console.log('LA P*** MADRE NO ENTIENDO NADA');
}

const guille = new Programador('Guille', 39245500);
const pepe = new Estudiante('Pepe', 222222);
guille.gritar();
pepe.gritar();
