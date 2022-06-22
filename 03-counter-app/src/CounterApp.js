import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ({value = 0}) => {
    
    const [counter, setcounter] = useState(1);


    
    const handleAdd = () => {
        //setcounter( counter + 1 );
        setcounter( ( c ) => c+1 )
    }

    const handleSubstract = () => {
        //setcounter( counter + 1 );
        setcounter( ( c ) => c-1 )
    }

    const handleReset = () => {
        //setcounter( counter + 1 );
        setcounter( value )
    }

    return (
    <>
        <h1>CounterApp</h1>
        <p>{ counter }</p>

        <button type="" onClick={ handleAdd }> +1 </button>
        <button type="" onClick={ handleSubstract }> -1 </button>
        <button type="" onClick={ handleReset }> Reset </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp


