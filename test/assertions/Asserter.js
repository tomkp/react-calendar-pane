import moment from 'moment';
import React from 'react/addons';
import Calendar from '../../src/Calendar';
import chai from 'chai';

const { TestUtils } = React.addons;
const expect = chai.expect;


export default (jsx) => {


    const calendar = TestUtils.renderIntoDocument(jsx);


    return {

        assertYear(expectedYear) {
            const year = TestUtils.findRenderedDOMComponentWithClass(calendar, 'year');
            expect(year.getDOMNode().textContent).to.equal(expectedYear);
            return this;
        },


        assertMonth(expectedMonth) {
            const month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
            expect(month.getDOMNode().textContent).to.equal(expectedMonth);
            return this;
        },


        previousMonth() {
            const previous = TestUtils.findRenderedDOMComponentWithClass(calendar, 'previous');
            TestUtils.Simulate.click(previous);
            return this;
        },


        nextMonth() {
            const next = TestUtils.findRenderedDOMComponentWithClass(calendar, 'next');
            TestUtils.Simulate.click(next);
            return this;
        },


        assertSelectedDay(expectedDay) {
            const selected = TestUtils.findRenderedDOMComponentWithClass(calendar, 'selected');
            const value = selected.getDOMNode().textContent;
            expect(+value).to.equal(expectedDay);
            return this;
        },


        assertToday() {
            const today = TestUtils.findRenderedDOMComponentWithClass(calendar, 'today');
            const value = today.getDOMNode().textContent;
            expect(value).to.equal(moment().format('D'));
            return this;
        },


        clickDay(date) {
            const days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
            const found = days.filter((day) => {
                var value = day.getDOMNode().dataset.day;
                return +value === date;
            });
            TestUtils.Simulate.click(found[0]);
            return this;
        }
    }
}