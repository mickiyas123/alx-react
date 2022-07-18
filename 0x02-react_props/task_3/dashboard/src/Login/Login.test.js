import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from "enzyme";
import Login from './Login';

configure({adapter: new Adapter()});

describe("Login Tests", () => {
    test("Login renders with out crash", () => {
        shallow(<Login />)
    });
    test("Login renders with out crash", () => {
        render(<Login />)
    })

    test("Login conatins 2 input and 2 labels", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.find('input').length).toEqual(2);
        expect(wrapper.find('label').length).toEqual(2);
    })
})
