import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from 'enzyme';
import Notifications from './Notifications';

configure({adapter: new Adapter()});

describe("App", () => {
    test("Notifications renders without crashing", () => {
        render(<Notifications />);
    });

    test("Notifications find ul", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.ul')).toBeDefined();
    });

    test("Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    test("Notifications renders text", () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p')
        expect(text.text()).toBe('Here is the list of notifications');
    });
})