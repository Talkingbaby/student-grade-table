import React, { Component } from 'react';

export default class StudentNameInput extends Component {

  render() {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-user"></span>
            </span>
            <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" value={this.props.name} onChange={this.props.onchange}/>
        </div>
    );
  }
}