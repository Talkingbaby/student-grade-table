import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
    render() {
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
                  {
                    this.props.students.map((student) => {
                      return (
                        <tr key={student.id}>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.grade}</td>
                          <td><button type="button" className="btn btn-danger" onClick={this.props.handleDelete.bind(null, student.id)}>remove</button></td>
                        </tr>
                      );
                    })
                  }
                  </tbody>
                </table>
              </div>
        )
    }
}

Table.propTypes = {
  students: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};