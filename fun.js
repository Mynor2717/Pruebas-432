function Personas(nombre) {
  this.nombre = nombre;
  console.log(`Hola mi nombre es ${nombre}`)
  let nombreP = 'adfaikujshd'

  this.getInfo = function () {
    return nombreP;
  }
}

let Persona1 = new Personas('Mynor P');

// esta es la primera forma para declarar una clase con tus propiedades y metodo


//-----------------------------------------------------//


/* Esta es la segunda manera para hacer las clases  */

class comida {
  constructor(nombre, plato) {
    this.nombreC = nombre;
    this.platox = plato;
  }

  ordenar(Pimientos, Sal) {
    return `la orden se esta tomando ahora de ${this.platox} ${Pimientos = 'pimientos'} `;

    const array = [{

    }]
  }
}

class Aderesos extends comida {
  constructor(nombre, plato, subPlato) {
    super(nombre, plato);

    this.platoExtra = [];
    this.OtroPlato = subPlato;
  }

  NuevoPlato(plato3) {
     this.platoExtra.push(plato3);
  }

}

const Persona3 = {
  nombres: {},
  apellidos: [],
  apodos: {
    El: []
  }
}

const Extraer = Object.keys(Persona3).map(keys => {
  console.log(keys);
  const values = Persona3[keys]
  console.log(values)
})

const manzana = new comida('Mynor', 'salpicon');
console.log(manzana.ordenar())

const NuevaOrden = new Aderesos('Mynor', 'salpicon', 'carne asada');
console.log(NuevaOrden);

const nombres = 'Mynor Parrales'

console.log(nombres.split(' ', 1));


