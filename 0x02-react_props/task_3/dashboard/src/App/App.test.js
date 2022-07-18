import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('App', () => {
    test('App should not rash', () => {
        render(<App />)
    });

    test("App renders a div with the class: App-header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toBeDefined();
    });

    test("App renders a div with the class: App-body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toBeDefined();
    });

    test("App renders a div with the class: App-footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toBeDefined();
    });

    test("App contains componet Notifications", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications').length).toEqual(1);
    })

    test("App conatins component Header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toEqual(1);
    })

    test("App conatins component Login", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login').length).toEqual(1);
    })

    test("App conatins component Footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toEqual(1);
    })
 
});