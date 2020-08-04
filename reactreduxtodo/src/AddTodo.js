import React, {useState} from 'react'


export default function AddTodo() {
    const [todo, setTodo] = useState() 

    const handleChange = (event) => {
        const {name, value} = event.target
        setTodo(value);
        
    }

    const addTodo =() => {
        
    }

    console.log(todo)
    return (
        <div>
            <input type = 'text' onChange={handleChange} value ={todo}/>
            <button type = 'button' onClick ={addTodo}>Add Todo</button>
        </div>
    )
}
