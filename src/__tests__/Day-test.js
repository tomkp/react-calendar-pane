jest.dontMock('../Day');
//jest.dontMock('moment');

var moment = require('moment');
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Day = require('../Day');


describe('Day', function() {

    var date = moment("03/04/2015", "DD/MM/YYYY");
    var Day = TU.renderIntoDocument(
        <Day date={date} active={date} />
    );


    it('displays the correct day', function() {
        console.info('displays the correct day');
        var day = TU.findRenderedDOMComponentWithClass(Day, 'day');
        expect(day.getDOMNode().textContent).toEqual('03');
    });


    it('should display as "active"', function() {
        console.info('should display as "active"');
        var day = TU.findRenderedDOMComponentWithClass(Day, 'day');
        expect(day.getDOMNode().className).toContain('active');
    });


});