import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from "enzyme";
import Footer from './Footer'

configure({adapter: new Adapter()});

describe("Footer Taste", () => {
    test("Footer renders without crashing", () => {
        shallow(<Footer />)
    });

    test("Footer renders without crashing", () => {
        render(<Footer />)
    });

    test("Footer contains a text 'Copyright' ", () => {
        const wrapper = shallow(<Footer />)
        const par = wrapper.find('p')
        expect(par.text().includes('Copyright')).toBe(true);
    })
})