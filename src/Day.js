import React from 'react';


export default React.createClass({

    propTypes: {
        handleClick: React.PropTypes.func.isRequired,
        date: React.PropTypes.object.isRequired,
        //month: React.PropTypes.object.isRequired,
        today: React.PropTypes.object.isRequired,
        selected: React.PropTypes.object,
        children: React.PropTypes.node
    },

    render() {
        let classes = ['Day'];
        if (this.props.today.isSame(this.props.date, 'day')) {
            classes.push('today');
        }
        if (this.props.selected && this.props.selected.isSame(this.props.date, 'day')) {
            classes.push('selected');
        }
        classes = classes.concat(this.props.classes);

        let body
        if (!!this.props.children) {
            body = this.props.children;
        }
        else {
            body = (
                <button className="Day-inner"
                    onClick={() => this.props.handleClick(this.props.date)}>
                    {this.props.date.format('D')}
                </button>
            )
        }

        return (
            <td className={classes.join(' ')}
                data-date={this.props.date.toISOString()}
                data-day={this.props.date.format('D')}
            >
                {body}
            </td>
        );
    }
});
