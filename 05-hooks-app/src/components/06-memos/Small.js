import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Small = memo(({ num }) => {


    console.log('ON SMall');

    return (
        <small>{num}</small>
    )
})

Small.propTypes = {}

export default Small