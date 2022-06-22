import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import '../02-useEffect/effects.css';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const Layout = props => {


    const { state, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const { quote } = !!data && data[0];

    const pTag = useRef()

    const [boxSize, setboxSize] = useState({

    });

    useLayoutEffect(() => {
        //setboxSize( pTag.current.getBoundingClientReact() );
        //console.log(pTag.current)
        
    }, [ quote ])

    return (
        <div>
            <h1>Layout Effect - Breaking Bad Quotes</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {
                    //JSON.stringify(boxSize, null , 3)
                }
            </pre>
            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Next quote</button>

        </div>
    )
}

Layout.propTypes = {}

export default Layout