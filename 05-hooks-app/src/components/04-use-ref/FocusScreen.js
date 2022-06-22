import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }


    return (
        <div>
            <h1>FocusScreen</h1>

            
                <div className='form-group my-2 py-2'>
                    <label for="name">Name:</label>
                    <input
                        ref={inputRef} 
                        className='form-control' 
                        type="text" id="name" 
                        name="name" />
                </div>
                <div className='form-group my-2 py-2'>
                    <label for="mail">E-mail:</label>
                    <input
                        ref={inputRef}  
                        className='form-control' 
                        type="email" id="email" 
                        name="email" />
                </div>
                <button
                    onClick={handleClick}
                    className='btn btn-outline-primary'
                >
                    Save
                </button>
        </div>
    )
}
