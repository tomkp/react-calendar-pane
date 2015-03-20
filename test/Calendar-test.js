import moment from 'moment';
import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
import Calendar from '../src/Calendar';


describe('Calendar', () => {

    var onSelect = function(date) {
        //console.info('onSelect', date);
    };

    it('displays the correct year', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).to.equal('2015');
    });


    it('displays the correct month', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('April');
    });


    it('should be able to go to previous month', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var previous = TestUtils.findRenderedDOMComponentWithClass(calendar, 'previous');
        TestUtils.Simulate.click(previous);
        var month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('March');
    });


    it('should be able to go to next month', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var next = TestUtils.findRenderedDOMComponentWithClass(calendar, 'next');
        TestUtils.Simulate.click(next);
        var month = TestUtils.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('May');
    });


    it('should trigger the callback with selected date when clicking a day', function(done) {
        var callback = function(selectedDate) {
            expect(moment(selectedDate).format("DD/MM/YYYY")).to.equal('08/04/2015');
            done();
        };

        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={callback} />
        );
        var days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
    });


    it('should set selected date to active', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
        var active = TestUtils.findRenderedDOMComponentWithClass(calendar, 'active');
        expect(active.getDOMNode().textContent).to.equal('8');
    });


    it('should add class to today', function() {
        var calendar = TestUtils.renderIntoDocument(
            <Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />
        );
        var days = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'Day');
        TestUtils.Simulate.click(days[10]);
        var active = TestUtils.findRenderedDOMComponentWithClass(calendar, 'active');
        expect(active.getDOMNode().textContent).to.equal('8');
    });

});