import React, { Component } from 'react';

export default class PageHeader extends Component {
    render() {
        // console.log('return avg func: ', this.props.average);
        return (
            <div className="page-header">
                {/*<!-- only show this element when the isnt on mobile -->*/}
                <h1 className="visible-md visible-lg">Student Grade Table
            <small className="pull-right">Grade Average : {this.props.average}<span className="avgGrade label label-default"></span></small>
                </h1>
                {/*<!-- only show this element when the user gets to a mobile version -->*/}
                <h3 className=" visible-xs visible-sm">Student Grade Table
            <small className="pull-right">Grade Average : {this.props.average}<span className="avgGrade label label-default"></span></small>
                </h3>
            </div>
        )
    }
}