import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';

const Memos = props => {
  
    const  {state:counter, increment } = useCounter(10);
  
    const [show, setshow] = useState(true);

  
    return (
    <div>
        <h1>Memos</h1>
        <hr />
        <h1>Counter: <Small num={ counter } /> </h1>
        <br />

        <button
            className='btn btn-success'
             onClick={ increment } type="">+1</button>
        <button 
        className='btn btn-primary mx-3'
            onClick={ () => setshow(!show) } 
            >
                Show/HIde {JSON.stringify(show)}
        </button>
    </div>
  )
}

Memos.propTypes = {}

export default Memos