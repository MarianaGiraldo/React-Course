import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

const CallbackHook = props => {


    const [state, setstate] = useState(0);

    // const increment = ( ) => {
    //     setstate(state + 1 );
    // }

    const increment = useCallback(
      ( num ) => {
        setstate( c => c + num );
      },
      [ setstate ],
    )
    

    useEffect(() => {
    }, [setstate]);

    return (
        <div>
            <h1>CallbackHook: {state}</h1>
            <ShowIncrement increment={increment} />
        </div>
    )
}

CallbackHook.propTypes = {}

export default CallbackHook