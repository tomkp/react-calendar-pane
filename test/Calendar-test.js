import moment from 'moment';
import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
import Calendar from '../src/Calendar';


describe('Calendar', () => {

    const onSelect = function(date) {
        //console.info('onSelect', date);
    };

    it('displays the correct year', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).to.equal('2015');
    });


    it('displays the correct month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('April');
    });


    it('should be able to go to previous month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const previous = TestUtils.findRenderedDOMComponentWithClass(calendar, 'previous');
        TestUtils.Simulate.click(previous);
        const month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('March');
    });


    it('should be able to go to next month', function() {
        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        const next = TestUtils.findRenderedDOMComponentWithClass(calendar, 'next');
        TestUtils.Simulate.click(next);
        const month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('May');
    });


    it('should trigger the callback with selected date when clicking a day', function(done) {
        const callback = function(selectedDate) {
            expect(moment(selectedDate).format("DD/MM/YYYY")).to.equal('08/04/2015');
            done();
        };

        const calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={callback} />
        );
        const days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
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