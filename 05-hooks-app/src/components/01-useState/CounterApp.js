import PropTypes from 'prop-types'
import { useState } from 'react';
import './counter.css';

const CounterApp = ({value = 0}) => {
    
    const [counter, setcounter] = useState({
        counter1:1,
        counter2: 2
    });

    const { counter1, counter2 } = counter;

    
    const handleAdd = () => {
        setcounter( {
            ... counter,
            counter1: counter1  + 1
        } );
        //setcounter( ( c ) => c+1 )
    }

    const handleSubstract = () => {
        setcounter( {
            ... counter,
            counter1: counter1  - 1
        } );
    }

    const handleReset = () => {
        setcounter( {
            ... counter,
            counter1: value
        } );
    }

    return (
    <>
        <h1>CounterApp</h1>
        <p>Counter 1:  { counter1 }</p>
        <p>Counter 2:  { counter2 }</p>

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


