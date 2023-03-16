import { useState } from "react"

function AddTodo({todos, setTodos}){
    const [text, setText] = useState('');

    function add(){
        if(text.trim()){
            let newTodos = [...todos, {text: text, done: false}];
            setTodos(newTodos);
            setText('');
        }

    }

    return(
        <form>
            <input type='text' placeholder="Add a Todo" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type='button' onClick={add}>Add</button>
        </form>
        
    )
}


export default AddTodo;