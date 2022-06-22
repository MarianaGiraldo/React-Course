import { useEffect, useReducer } from "react"
import { todoReducer } from "../components/08-useReducer/todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     desc: 'Recolectar la gema del alma',
    //     done: false
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [] )
}


export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
        
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch( action )
    };

    const handleDeleteTodo = ( todo ) => {
        const action = {
            type: 'Remove Todo',
            payload: todo
        }
        dispatch( action )
    };

    const hangleToggleTodo = ( todo ) => {
        const action = {
            type: 'Toggle Todo',
            payload: todo
        }
        dispatch( action )
    };
  
  
    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter( todo => !todo.done ).length ,
        handleNewTodo,
        handleDeleteTodo,
        hangleToggleTodo
    }
}
