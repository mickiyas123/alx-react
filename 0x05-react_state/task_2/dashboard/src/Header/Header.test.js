import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import {StyleSheetTestUtils} from 'aphrodite';
import { AppProvider } from '../App/AppContext'

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing Header Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Header />)
    })
    test('render header without crashing', () => {
        expect(wrapper.length).toBe(1)
        wrapper.unmount()
    })

    test('render img and h1', () => {
        expect(wrapper.find('img').length).toBe(1)
        expect(wrapper.find('h1').length).toBe(1)
        wrapper.unmount()
    })
    
})

describe("Testing Header with context", () => {
    let context;
    test("test that mounts the Header component with a default context value to verify that the logoutSection is not created", () => {
        context = {user: {email: "", password: "", isLoggedIn: false}, logOut: jest.fn()}
        const wrapper = mount(<AppProvider value={context}> <Header /> </AppProvider>)
        expect(wrapper.find('#logoutSection').length).toBe(0)
    })

    test("test that mounts the Header component with a user defined (isLoggedIn is true and an email is set) to Verify that the logoutSection is created", () => {
        context = {user: {email: "xyz@gmial.com", password: "abcd", isLoggedIn: true}, logOut: jest.fn()}
        const wrapper = mount(<AppProvider value={context}> <Header /> </AppProvider>)
        expect(wrapper.find('#logoutSection').length).toBe(1)
    })
})