import React, { Component } from 'react';

export default class StudentCourseInput extends Component {

  render() {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-education"></span>
            </span>
            <input type="text" className="form-control" name="studentGrade" id="studentGrade"
                placeholder="Student Grade" value={this.props.grade} onChange={this.props.onchange} />
        </div>
    );
  }
}
