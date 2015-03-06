jest.dontMock('../Day');

var moment = require('moment');
var React = require('react/addons');
var TU = React.addons.TestUtils;
var Day = require('../Day');


describe('Day', function() {

    var handleClick = function(d) {
        console.info('handle click', d);
    };

    var date = moment("03/04/2015", "DD/MM/YYYY");
    var day = TU.renderIntoDocument(
        <Day date={date} actual={date} handleClick={handleClick} />
    );


    it('displays the correct day', function() {
        console.info('displays the correct day');
        var component = TU.findRenderedDOMComponentWithClass(day, 'Day');
        expect(component.getDOMNode().textContent).toEqual('3');
    });


    it('should display as "active"', function() {
        console.info('should display as "actual"');
        var component = TU.findRenderedDOMComponentWithClass(day, 'Day');
        expect(component.getDOMNode().className).toContain('actual');
    });


});