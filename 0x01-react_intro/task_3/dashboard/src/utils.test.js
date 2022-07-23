import { getFooterCopy, getFullYear, getLatestNotification } from './utils';


test("getFullYear returns the correct year", () => {
    const year = getFullYear();
    expect(year).toBe(2022)
})

test("renders Holberton School when `isIndex` is true", () => {
    const footerText = getFooterCopy(true);
    expect(footerText).toBe('Holberton School');
})
test("renders Holberton School main dashboard when `isIndex` is false", () => {
    const footerText = getFooterCopy(false);
    expect(footerText).toBe('Holberton School main dashboard');
})
test("getLatestNotification returns string", () => {
    const notificationText = getLatestNotification()
    expect(typeof notificationText).toBe("string");
})
test("getLatestNotification returns a specific string", () => {
    const notificationText = getLatestNotification()
    expect(notificationText).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})