import moment from 'moment';
import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
import Day from '../src/Day';


describe('Day', function() {

    var handleClick = function(d) {
        console.info('handle click', d);
    };

    var date = moment("03/04/2015", "DD/MM/YYYY");
    var day = TestUtils.renderIntoDocument(
        <Day date={date} selected={date} today={date} handleClick={handleClick} />
    );


    it('displays the correct day', function() {
        var component = TestUtils.findRenderedDOMComponentWithClass(day, 'Day');
        //expect(component.getDOMNode().textContent).to.equal('3');
    });


    it('should display as "selected"', function() {
        var component = TestUtils.findRenderedDOMComponentWithClass(day, 'Day');
        //expect(component.getDOMNode().className).to.contain('actual');
    });


});