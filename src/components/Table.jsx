import React, { Component } from 'react';
import Students from './form-components/StudentRows';
import fire from 'firebase';

export default class Table extends Component {
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let studentsRef = fire.database().ref('students').orderByKey().limitToLast(100);
    studentsRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let students = {
        student: snapshot.val(),
      };
      console.log('students: ', students);
      // this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

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
                    <Students />
                  </tbody>
                </table>
              </div>
        )
    }
}