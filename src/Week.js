import React from 'react';


let Week = React.createClass({
    render() {
        return <tr className='Week'>{this.props.children}</tr>
    }
});


export default Week;
