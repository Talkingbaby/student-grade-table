import React, { Component } from 'react';

export default class StudentNameInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

  render() {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-user"></span>
            </span>
            <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" value={this.state.value} onChange={this.handleChange}/>
        </div>
    );
  }
}