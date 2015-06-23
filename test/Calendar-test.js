import moment from 'moment';
import React from 'react/addons';
import Calendar from '../src/Calendar';
import chai from 'chai';

const { TestUtils } = React.addons;
const expect = chai.expect;


describe('Calendar', () => {

    const onSelect = function(date) {
        //console.info('onSelect', date);
    };


    it('displays the correct year', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        new Asserter(calendar).assertYear('2015');
    });


    it('displays the correct month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        new Asserter(calendar).assertMonth('April');
    });


    it('should be able to go to previous month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        new Asserter(calendar).previousMonth().assertMonth('March');
    });


    it('should be able to go to next month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        new Asserter(calendar).nextMonth().assertMonth('May');
    });


    it('should trigger the callback with selected date when clicking a day', function(done) {
        const callback = function(selectedDate) {
            expect(moment(selectedDate).format("DD/MM/YYYY")).to.equal('08/04/2015');
            done();
        };

        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={callback} />
        );

        new Asserter(calendar)
            .clickDay(10)
        ;
    });


    it('should set selected date to selected', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
        const selected = TestUtils.findRenderedDOMComponentWithClass(calendar, 'selected');
        expect(selected.getDOMNode().textContent).to.equal('8');
    });


    it('should add class to today', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
        const selected = TestUtils.findRenderedDOMComponentWithClass(calendar, 'selected');
        expect(selected.getDOMNode().textContent).to.equal('8');
    });
});




class Asserter {

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