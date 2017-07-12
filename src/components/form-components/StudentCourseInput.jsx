import React, { Component } from 'react';

export default class StudentCourseInput extends Component {

  render() {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-list-alt"></span>
            </span>
            <input type="text" className="form-control" name="course" id="course"
                placeholder="Student Course" value={this.props.course} onChange={this.props.onchange} />
        </div>
    );
  }
}