import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import React from 'react'

import Todo from './Todo'

Enzyme.configure({adapter : new EnzymeAdapter()})

describe('@input elemnet',() => {
    test('render without any error', () => {
        const wrapper = shallow(<Todo/>)
        const inputBox = wrapper.find('.input').length
        expect(inputBox).toBe(1)
    })

    test('setting name onchanging the value ', () => {
        const wrapper = shallow(<Todo/>)
        const inputBox = wrapper.find('.input')
        inputBox.simulate('change', {target: {value : 'Goto School at 7am in the morning '}})
        const newBoxValue = wrapper.find('.input').props().value
        expect(newBoxValue).toBe('Goto School at 7am in the morning ')
    })
})
describe('@Add task button',() => {
    test('render without any error', () => {
        const wrapper = shallow(<Todo/>)
        const AddButton = wrapper.find('.add-task-button').length
        expect(AddButton).toBe(1)
    })

    test('clear out the input field',()=>{
        const wrapper = shallow(<Todo/>)
        wrapper.find('.add-task-button').simulate('click', {preventDefault() {}})

        const inputBox = wrapper.find('.input').props().value
        expect(inputBox).toBe('')
    })
})
describe('@Task Component',() => {
    test('render without any error', () => {
        const wrapper = shallow(<Todo/>)
        const taskComp = wrapper.find('Tasks').length
        expect(taskComp).toBe(1)
    })
    test('will have todoList as prop', () => {
        const wrapper = shallow(<Todo/>)
        const taskComp = wrapper.find('Tasks').props().todoList
        expect(taskComp).toBeTruthy()
    })
    test('will have dispatch as prop', () => {
        const wrapper = shallow(<Todo/>)
        const taskComp = wrapper.find('Tasks').props().dispatch
        expect(taskComp).toBeTruthy()
    })
})
    