import moment from 'moment';
import React from 'react/addons';
import Calendar from '../../src/Calendar';
import chai from 'chai';

const { TestUtils } = React.addons;
const expect = chai.expect;


export default class Asserter {

    constructor(calendar) {
        this.component = TestUtils.findRenderedDOMComponentWithClass(calendar, 'Calendar');
        this.calendar = calendar;
    }

    assertYear(expectedYear) {
        const year = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'year');
        expect(year.getDOMNode().textContent).to.equal(expectedYear);
        return this;
    }

    assertMonth(expectedMonth) {
        const month = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal(expectedMonth);
        return this;
    }

    previousMonth() {
        const previous = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'previous');
        TestUtils.Simulate.click(previous);
        return this;
    }

    nextMonth() {
        const next = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'next');
        TestUtils.Simulate.click(next);
        return this;
    }

    assertSelectedDay(expectedDay) {
        const selected = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'selected');
        expect(selected.getDOMNode().textContent).to.equal(expectedDay);
    }

    clickDay(dayIndex) {
        const days = TestUtils.scryRenderedDOMComponentsWithClass(this.calendar, 'Day');
        TestUtils.Simulate.click(days[dayIndex]);
    }
}