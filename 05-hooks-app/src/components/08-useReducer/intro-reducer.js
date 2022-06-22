

console.log('HOla ')


const initialState = [{
    id: 1,
    todo: 'Recolectar piedra',
    done: false
}]



const todoReducer = ( state = initialState, action = {}) => {

    if ( action.type === 'Add todo') {
        return [ ...state, action.payload]
    }


    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 1,
    todo: 'Recolectar piedra 2',
    done: false
};


const addTodoAction = {
    type: 'Add todo',
    payload: newTodo
};


todos = todoReducer(todos, addTodoAction);


console.log(todos);
