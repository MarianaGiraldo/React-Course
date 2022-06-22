import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './effects.css';
import { Message } from './Message';

const SimpleForm = props => {

    const [form, setform] = useState({
        name: '',
        email: ''
    });

    const { name, email } = form;

    useEffect(() => {
        // console.log('1 vez')
    }, []);

    useEffect(() => {
        // console.log('Cambia el form')
    }, [form]);

    useEffect(() => {
        // console.log('Cambia el nombre')
    }, [name]);

    


    const handleInputChange = ({target}) => {
        // console.log(target.name)
        setform({
            ...form,
            [ target.name ] : target.value
        })
    }

    return (
        <div>
            <h2>useEffect</h2>
            <form method="post">
                <ul>
                    <div className='form-group'>
                        <label for="name">Name:</label>
                        <input className='form-control' onChange={handleInputChange} value={name} type="text" id="name" name="name" />
                    </div>
                    <div className='form-group'>
                        <label for="mail">E-mail:</label>
                        <input className='form-control' onChange={handleInputChange} value={email} type="email" id="mail" name="email" />
                    </div>
                </ul>
            </form>
            { (name === '123') && <Message /> }
        </div>
    )
}

SimpleForm.propTypes = {}

export default SimpleForm