import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Calendar from '../../src/Calendar';
import chai from 'chai';

const expect = chai.expect;


export default (jsx) => {


    const calendar = ReactTestUtils.renderIntoDocument(jsx);


    return {

        assertYear(expectedYear) {
            const year = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'year');
            expect(ReactDOM.findDOMNode(year).textContent).to.equal(expectedYear);
            return this;
        },


        assertMonth(expectedMonth) {
            const month = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
            expect(ReactDOM.findDOMNode(month).textContent).to.equal(expectedMonth);
            return this;
        },


        previousMonth() {
            const previous = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'previous');
            ReactTestUtils.Simulate.click(previous);
            return this;
        },


        nextMonth() {
            const next = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'next');
            ReactTestUtils.Simulate.click(next);
            return this;
        },


        assertSelectedDay(expectedDay) {
            const selected = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'selected');
            const value = ReactDOM.findDOMNode(selected).textContent;
            expect(+value).to.equal(expectedDay);
            return this;
        },


        assertToday() {
            const today = ReactTestUtils.findRenderedDOMComponentWithClass(calendar, 'today');
            const value = ReactDOM.findDOMNode(today).textContent;
            expect(value).to.equal(moment().format('D'));
            return this;
        },


        clickDay(date) {
            const days = ReactTestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
            const found = days.filter((day) => {
                var value = ReactDOM.findDOMNode(day).dataset.day;
                return +value === date;
            });
            ReactTestUtils.Simulate.click(found[0]);
            return this;
        }
    }
}