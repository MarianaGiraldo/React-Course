const nombre = "Mariana"
const nombresaludo = ` Hola ${nombre}`

const persona = {
    nombre: 'Mariana',
    apellido: 'Giraldo'
};

const persona2 = persona;
persona2.nombre = 'Peter'

console.log( persona );
console.log( persona2 );

const persona3 = {...persona};
persona3.nombre = 'Gabriela';

console.log( persona.nombre );
console.log( persona3.nombre );