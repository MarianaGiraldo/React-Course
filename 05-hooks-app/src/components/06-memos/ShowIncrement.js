import React from 'react'

export const ShowIncrement = ( { increment } ) => {
  return (
    <div>
        <button 
            className='btn btn-info'
            onClick={ increment(5) }
        >
            +1
        </button>
    </div>
  )
}
