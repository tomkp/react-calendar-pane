import React from 'react';


let Week = React.createClass({
    render() {
        return <tr>{this.props.children}</tr>
    }
});


module.exports = Week;
