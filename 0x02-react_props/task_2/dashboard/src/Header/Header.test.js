import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from 'enzyme';
import Header from './Header'

configure({adapter: new Adapter()});

describe("Header Test", () => {
    test("Header renders without crashing", () => {
        shallow(<Header />);
    });

    test("Header renders without crashing", () => {
        render(<Header />);
    });
    
    test("Header render img and h1", () => {
        const warpper = shallow(<Header />)
        expect(warpper.find('img').length).toEqual(1);
        expect(warpper.find('h1').length).toEqual(1);
    })
})