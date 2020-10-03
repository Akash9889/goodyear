import React from 'react'
import { todoActions } from './todoReducer'

export default function Tasks({todoList, dispatch}) {
    return (
        <ul>
        {todoList.length === 0 ? null : todoList.map(task => {
            return(
            <li key = {task.id}>
                <span>{task.id}</span>
                <span>{task.name}</span>
                <span className = 'toggle' 
                    onClick = {() => dispatch({type: todoActions.TOGGLE_STATUS, payload: task } ) } >
                    {task.status ? 'Completed' : 'Incomplete' }
                </span>
                <button className = 'delete-button' 
                    onClick = {() =>dispatch({type: todoActions.DELETE_TASK , payload: task } ) }>
                     Delete 
                </button>
            </li>
            )
        })}
    
        </ul>
    )
}
