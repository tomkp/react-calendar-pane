import React from 'react';


let Day = React.createClass({

    render() {
        let classes = ['Day'];
        if (this.props.actual.isSame(this.props.date, 'day')) {
            classes.push('actual');
        }
        return (
            <td className={classes.join(' ')}
                data-date={this.props.date.toISOString()}
                onClick={this.props.handleClick}>
                {this.props.date.format('D')}
            </td>
        );
    }
});


module.exports = Day;
