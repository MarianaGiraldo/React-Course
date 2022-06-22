const persona = {nombre: 'Mariana', edad:18}

const { nombre, edad } = persona
console.log(nombre)

const returnPersona = ({ nombre, edad}) => {
    console.log(nombre, edad)
    return {
        nombreClave: nombre,
        anios: edad
    }
}

const { nombreClave, anios } = returnPersona(persona);
