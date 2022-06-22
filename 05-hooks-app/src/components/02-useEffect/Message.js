import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [{x, y}, setcoords] = useState({
        x: 0,
        y: 0
    });
  
    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {
                x: e.x,
                y: e.y
            }
            setcoords(coors)
        }

        window.addEventListener('mousemove', mouseMove )

        console.log('efect')
        return () => {
            console.log('cleanup')
            window.removeEventListener('mousemove', mouseMove)
        };
    }, []);
  
  
    return (
    <div>
        <h3>Eres genial</h3>
        <p> X: { x }</p>
        <p> Y: { y }</p>
    </div>
  )
}
