import React from 'react'
import PropTypes from 'prop-types'
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = ({ value = 15 }) => {
  
  const { state, increment, decrement, reset } = useCounter(value)

  return (
    <>
      <h1>CounterWithCustomHook</h1>
      <p>Counter 1:  {state}</p>

      <button type="" onClick={ () => increment(2)}> +1 </button>
      <button type="" onClick={ () => decrement(2)}> -1 </button>
      <button type="" onClick={reset}> Reset </button>

    </>
  )
}

CounterWithCustomHook.propTypes = {}

export default CounterWithCustomHook