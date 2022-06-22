import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo }) => {

    //const saludo = 'HOla mundo const'
    const objeto = {
        nombre: "Mariana",
        edad: 18
    }

    
    return <>
        <h1>{ saludo }</h1>
        <pre>{JSON.stringify( objeto, null, 3)}</pre>
        <p>{ subtitulo }</p>
    </>
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: "Mi primera app",
    saludo: "Hola Mundo"
}

export default PrimeraApp