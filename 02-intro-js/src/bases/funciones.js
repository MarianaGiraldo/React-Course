const saludar = ( nombre ) => {
    return `Hola ${nombre}`
}

//console.log( saludar('Mariana'))

const saludar2 = ( nombre ) => `Hola ${nombre}`

console.log( saludar2('Mariana'));


const getUsuarioActivo = (nombre) => ({
    nombre: nombre
});

console.log( getUsuarioActivo('Mariana') );
