export const todoActions = {
    ADD_TASK : 'ADD_TASK',
    TOGGLE_STATUS: 'TOGGLE_STATUS',
    DELETE_TASK: 'DELETE_TASK'
}
let defaultId = 0

export function todoReducer(state = [], action){
    switch(action.type){
        case todoActions.ADD_TASK: {
            if(!action.payload) return state
            if(action.payload.name === '') return state

            return [...state, {id : ++defaultId, name: action.payload.name, status : false}]
        }
        case todoActions.TOGGLE_STATUS: {
            if(!action.payload.id) return state
            const newState = state.map(task => task.id === action.payload.id ? {...task, status: !task.status} : task)
            return newState
        }

        case todoActions.DELETE_TASK: {
            if(!action.payload.id) return state
            const newState = state.filter(task => task.id !== action.payload.id)
            return newState
        }
        default: return state   
    }
}