import React from 'react'
import PropTypes from 'prop-types'

import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

const MultipleCustomHooks = props => {


    const { state, increment } = useCounter(1);
 
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const { author, quote } = !!data && data[0];



    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ? (
                    <div className='alert alert-info'>
                        Loading ...
                    </div>
                ) : (
                    <blockquote className='blockquote text-right'>
                        <p>
                            {quote}
                        </p>
                        <footer className='blockqoute-footer'>
                            {author}
                        </footer>
                    </blockquote>
                )
            }
            <button 
            className='btn btn-primary'
            onClick={ increment }
            >
                Next quote</button>

        </div>
    )
}

MultipleCustomHooks.propTypes = {}

export default MultipleCustomHooks