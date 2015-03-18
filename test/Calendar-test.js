var moment = require('moment');
var expect = require('expect.js');
//import expect from 'expect.js';
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Calendar = require('../src/Calendar');


describe('Calendar', function() {

    var onSelect = function(date) {
        console.info('onSelect', date);
    };

    it('displays the correct year', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).to.equal('2015');
    });


    it('displays the correct month', function() {
        console.info('displays the correct month');
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('April');
    });


    it('should be able to go to previous month', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />);
        var previous = TU.findRenderedDOMComponentWithClass(calendar, 'previous');
        TU.Simulate.click(previous);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('March');
    });


    it('should be able to go to next month', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} onSelect={onSelect} />);
        var next = TU.findRenderedDOMComponentWithClass(calendar, 'next');
        TU.Simulate.click(next);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).to.equal('May');
    });
});