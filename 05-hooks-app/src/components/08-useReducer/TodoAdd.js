import React from 'react'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ( { onNewTodo } ) => {

    const { desc, onInputChange, onResetForm } = useForm({
        desc: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( desc.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            desc: desc,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form 
            onSubmit={ onFormSubmit }
            className='p-2'>
            <input
                type="text"
                className='form-control mb-2'
                placeholder='What TODO?'
                name="desc" 
                value={desc}
                onChange={ onInputChange }
            />

            <button
                type="submit"
                className='btn btn-outline-primary'
            > Add </button>
        </form>
    )
}

export default TodoAdd