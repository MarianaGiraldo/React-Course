import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifts } from './hooks/useFetchGifts';
// import { getGifs } from './helpers/getGifs';

const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([]);

    const { data:images, loading } = useFetchGifts( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            {
                loading &&  <p className='animate__animated animate__flash'> Cargando...</p>
            }

            <div className='card-grid'>
            
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img} 
                    />
                ))
            }
        </div>
        </>
        
    )
}


export default GifGrid