import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './effects.css';
import { Message } from './Message';
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = props => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email , password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <h2>FormWithCustomHook</h2>
            <form onSubmit={ handleSubmit }>
                <div className='form-group'>
                    <label for="name">Name:</label>
                    <input className='form-control' onChange={handleInputChange} value={name} type="text" id="name" name="name" />
                </div>
                <div className='form-group'>
                    <label for="mail">E-mail:</label>
                    <input className='form-control' onChange={handleInputChange} value={email} type="email" id="email" name="email" />
                </div>
                <div className='form-group'>
                    <label for="password">Password:</label>
                    <input className='form-control' onChange={handleInputChange} value={password} type="password" id="password" name="password" />
                </div>
                <button type="submit" className='btn btn-primary'>Guardar</button>
            </form>
            {(name === '123') && <Message />}
        </div>
    )
}

FormWithCustomHook.propTypes = {}

export default FormWithCustomHook