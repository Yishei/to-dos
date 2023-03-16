import './Todo.css';

function Todo({index, todo, todos, setTodos}){


    function handleDone(index){
        let newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }
    return(
        <label className={todo.done ? 'done' : ''}>
            <span>{todo.text}</span>
            <input type='checkbox' checked={todo.done} onChange={()=> handleDone(index)}></input>
        </label>
    )
}


export default Todo;