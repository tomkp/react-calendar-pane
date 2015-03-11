jest.dontMock('../Calendar');

var moment = require('moment');
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Calendar = require('../Calendar');


describe('Calendar', function() {


    it('displays the correct year', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'year');
        expect(month.getDOMNode().textContent).toEqual('2015');
    });


    it('displays the correct month', function() {
        console.info('displays the correct month');
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).toEqual('April');
    });


    it('should be able to go to previous month', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />);
        var previous = TU.findRenderedDOMComponentWithClass(calendar, 'previous');
        TU.Simulate.click(previous);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).toEqual('March');
    });


    it('should be able to go to next month', function() {
        var calendar = TU.renderIntoDocument(<Calendar date={moment("03/04/2015", "DD/MM/YYYY")} />);
        var next = TU.findRenderedDOMComponentWithClass(calendar, 'next');
        TU.Simulate.click(next);
        var month = TU.findRenderedDOMComponentWithClass(calendar, 'month');
        expect(month.getDOMNode().textContent).toEqual('May');
    });
});