import Enzyme, {shallow, simulate} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import React from 'react'

import Tasks from './Tasks'

Enzyme.configure({adapter : new EnzymeAdapter()})

describe('@Task Component', () => {
    
    test('when todoList not having any tasks',() => {
        const props = []
        const wrapper = shallow(<Tasks todoList={[]}/>)
        const list = wrapper.find('li').length
        expect(list).toBe(0)
    })
    test('when todoList contains tasks',() => {
        const props = [{id : 1, name : 'Goto School at 7am in the morning ', status: false},
                       {id : 2, name : 'Come back from  at 2pm in the noon ', status: false}]
        const wrapper = shallow(<Tasks todoList={props}/>)
        const list = wrapper.find('li').length
        expect(list).toBe(2)
    })

    test('toggleing status on click', () => {
        const mockedDispatch = jest.fn()
        const props = [{id : 1, name : 'Goto School at 7am in the morning ', status: false}]
        const wrapper = shallow(<Tasks todoList={props} dispatch = {mockedDispatch}/>)
        wrapper.find('.toggle').simulate('click')
        const mockedDispatchCallCount = mockedDispatch.mock.calls.length
        expect(mockedDispatchCallCount).toBe(1)
    })

    test('removing task on click of delete button', () => {
        const mockedDispatch = jest.fn()
        const props = [{id : 1, name : 'Goto School at 7am in the morning ', status: false}]
        const wrapper = shallow(<Tasks todoList={props} dispatch = {mockedDispatch}/>)
        wrapper.find('.delete-button').simulate('click')
        const mockedDispatchCallCount = mockedDispatch.mock.calls.length
        expect(mockedDispatchCallCount).toBe(1)
    })
})