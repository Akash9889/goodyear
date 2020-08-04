import React, {useState} from 'react'


export default function AddTodo() {
    const [todo, setTodo] = useState('') 
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value);
    }
  
    const addTodo =() => {
        setTodoList([
            ...todoList,
            {   
                id : todoList.length,
                todoName: todo,
                completed: false
            }
        ])
        setTodo('')
    }

    const handleClick= (id) => {

    }

    console.log(todo)
    const date = Date.now()
    return (
        <div>
            <input type = 'text' value ={todo} onChange={handleChange} />
            <button type = 'button' onClick ={addTodo}>Add Todo</button>
            <ul>
                {todoList.map(task => (
                    <li key = {task.id} onClick = {handleClick(task.id)}>{task.todoName}</li>
                ))}
            </ul>
        </div>
    )
}
