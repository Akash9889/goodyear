import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import {todoReducer, todoActions} from './todoReducer'

Enzyme.configure({adapter : new EnzymeAdapter()})


describe('todoRecuer function tests by passing actions', () => {
    describe('#todoReducer with action type ADD_TODO', () => {
        test('with action type ADD_TODO and payload as empty array', () => {
            const initialState = []
            const payload = {name : '', status: false}
            const action = {type: todoActions.ADD_TASK, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(initialState)
        })
        test('with action type ADD_TODO with payload ', () => {
            const initialState = []
            const payload = {name : 'Goto School at 7am in the morning ', status: false}
            const expectedState = {id : 1, name : 'Goto School at 7am in the morning ', status: false}
            const action = {type: todoActions.ADD_TASK, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual([expectedState])
        })
        test('with action type ADD_TODO adding data in the existing tasks ', () => {
            const initialState = [{id : 1, name : 'Goto School at 7am in the morning ', status: false}]
            const payload = {name : 'Come back from  at 2pm in the noon ', status: false}
            const expectedState = [...initialState, {id : 2, name : 'Come back from  at 2pm in the noon ', status: false}]
            const action = {type: todoActions.ADD_TASK, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(expectedState)
        })
        
    })

    describe('#todoReducer with action type TOGGLE_STATUS', () => {
       
        test('with action type TOGGLE_STATUS switch staus from false to true', () => {
            const initialState = [{id : 1, name : 'Goto School at 7am in the morning ', status: false}]
            const payload = {id : 1}
            const expectedState = [ {id : 1, name : 'Goto School at 7am in the morning ', status: true} ]
            const action = {type: todoActions.TOGGLE_STATUS, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(expectedState)
        })
        test('with action type TOGGLE_STATUS switch staus from true to false ', () => {
            const initialState = [{id : 1, name : 'Goto School at 7am in the morning ', status: true}]
            const payload = {id : 1}
            const expectedState = [ {id : 1, name : 'Goto School at 7am in the morning ', status: false} ]
            const action = {type: todoActions.TOGGLE_STATUS, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(expectedState)
        })
        
    })

    describe('#todoReducer with action type DELETE_TASK', () => {
       
        test('with action type DELETE_TASK, on the basis of id should remove the task from task list ', () => {
            const initialState = [{id : 1, name : 'Goto School at 7am in the morning ', status: false},
                                  {id : 2, name : 'Come back from  at 2pm in the noon ', status: false}]
            const payload = {id : 1}
            const expectedState = [ {id : 2, name : 'Come back from  at 2pm in the noon ', status: false} ]
            const action = {type: todoActions.DELETE_TASK, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(expectedState)
        }) 
        test('with action type DELETE_TASK, when no id passed ', () => {
            const initialState = [{id : 1, name : 'Goto School at 7am in the morning ', status: false},
                                  {id : 2, name : 'Come back from  at 2pm in the noon ', status: false}]
            const payload = {}
            const action = {type: todoActions.DELETE_TASK, payload: payload}
            const newState = todoReducer(initialState, action)
            expect(newState).toEqual(initialState)
        })        
    })
})