import moment from 'moment';
import React from 'react/addons';
import Calendar from '../../src/Calendar';
import chai from 'chai';

const { TestUtils } = React.addons;
const expect = chai.expect;


export default class Asserter {


    constructor(jsx) {
        this.calendar = TestUtils.renderIntoDocument(jsx);
        this.component = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'Calendar');
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
        const value = selected.getDOMNode().textContent;
        expect(+value).to.equal(expectedDay);
        return this;
    }


    assertToday() {
        const today = TestUtils.findRenderedDOMComponentWithClass(this.calendar, 'today');
        const value = today.getDOMNode().textContent;
        expect(value).to.equal(moment().format('D'));
        return this;
    }


    clickDay(date) {
        const days = TestUtils.scryRenderedDOMComponentsWithClass(this.calendar, 'Day');
        const found = days.filter((day) => {
            var value = day.getDOMNode().dataset.day;
            return +value === date;
        });
        TestUtils.Simulate.click(found[0]);
        return this;
    }
}