import React from 'react';


export default React.createClass({
    render() {
        return <tr className='Week'>{this.props.children}</tr>
    }
});


