import React, { Component } from 'react';
import Students from './form-components/StudentRows';

export default class Table extends Component {

    render() {
      console.log("table: ", this.props.student);
        return (
            <div className="student-list-container  col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 col-lg-9 col-lg-pull-3">
                <table className="student-list table table-striped">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Student Course</th>
                      <th>Student Grade</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Students studentArr={this.props.studentArr} />
                  </tbody>
                </table>
              </div>
        )
    }
}