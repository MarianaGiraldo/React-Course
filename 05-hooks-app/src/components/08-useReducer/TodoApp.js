import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodos } from '../../hooks/useTodos'


const TodoApp = props => {

    
    const { todos, todosCount, todosPendingCount, handleDeleteTodo, hangleToggleTodo, handleNewTodo } = useTodos(); 


  return (
    <>
        <h1>TodoApp { todosCount } - <small>Pendientes: { todosPendingCount } </small>  </h1>
        <hr/>

        <div className='row' >
            <div className='col-7'>
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ hangleToggleTodo }
                 />
            </div>

            <div className='col-5'>
                <h4>Add TODO</h4>
                <hr/>
                
                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>

        
    </>
  )
}

TodoApp.propTypes = {}

export default TodoApp