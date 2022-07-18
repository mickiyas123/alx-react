import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem'

configure({adapter: new Adapter()});

describe("App", () => {
    test("Notifications renders without crashing", () => {
        render(<Notifications />);
    });

    test("Notifications find ul", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.ul')).toBeDefined();
    });

    test("Notifications calls NotificationItem ", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    test("Notifications renders text", () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p')
        expect(text.text()).toBe('Here is the list of notifications');
    });

     test("Check if first NotificationItem element renders the right html", () => {
         const wrapper = shallow(<Notifications />);
         const notiItem = wrapper.find("NotificationItem")
         const firstHtml = notiItem.first().html()
         expect(firstHtml).toEqual('<li data-notification-type="default">New course available</li>')
    })
})