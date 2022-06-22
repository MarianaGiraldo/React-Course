import React, {     useState } from 'react'
import PropTypes from 'prop-types'
import '../02-useEffect/effects.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const ExmpleRef = props => {

    const [show, setshow] = useState(false);


    return (
        <div>
            <h1>
                ExmpleRef
            </h1>
            <hr />
            <br />

            {
                show && <MultipleCustomHooks />
            }

            <button
            onClick={ () => setshow( !show ) }
                className='btn btn-success my-3 '
            >
                Show / Hide
            </button>



        </div>
    )
}

ExmpleRef.propTypes = {}

export default ExmpleRef