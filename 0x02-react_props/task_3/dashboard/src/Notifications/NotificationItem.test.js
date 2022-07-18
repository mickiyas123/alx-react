import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure, mount } from "enzyme";
import NotificationItem from "./NotificationItem";

configure({adapter: new Adapter()});

describe("Notification Item", () => {
    test("Notification Item renders with out crashing" ,() => {
        shallow(<NotificationItem />)
    });
    test("Notification Item renders with out crashing" ,() => {
        render(<NotificationItem />)
    });

    test("Check if it renders the correct html ", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test"/>)
        expect(wrapper.find('li').text()).toBe("test");
        expect(wrapper.find('li').prop("data-notification-type")).toBe("default")
    })
    it("Check if it renders the correct html by passing a dummy html prop", () => {
        const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.find("li").html()).toBe("<li><u>test</u></li>");
      });
})