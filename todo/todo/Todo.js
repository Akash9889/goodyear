import React, {useState, useReducer} from 'react'

import Tasks from './Tasks'
import {todoReducer, todoActions} from './todoReducer'


export default function Todo() {
    const [name ,setName] = useState()

    const [todoList, dispatch] = useReducer(todoReducer, [])

    const handleClick =(e) =>{
        e.preventDefault()
       if(name !=='' ){
           dispatch({type: todoActions.ADD_TASK, payload: {name : name} } )
           setName('')
       }
    } 

    return (
        <div>
            <form>
                <input className = 'input' onChange ={(e)=>  setName(e.target.value)} value = {name}/>
                <button className = 'add-task-button' 
                        type='submit' 
                        onClick = {(e) => handleClick(e)}>
                    Add Task
                </button>    
            </form>
            <Tasks todoList ={todoList} dispatch={dispatch}/>
        </div>
    )
}
