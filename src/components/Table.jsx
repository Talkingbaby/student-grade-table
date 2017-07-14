import React, { Component } from 'react';
import fire from 'firebase';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let studentsRef = fire.database().ref('students').orderByKey().limitToLast(100);
    studentsRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let students = snapshot.val();
      this.setState({ students: [students].concat(this.state.students)});
      console.log('students state: ', this.state.students);
      console.log('students: ', this.state.students[0]);
    })


    // /* Create reference to messages in Firebase Database */
    // let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    // messagesRef.on('child_added', snapshot => {
    //   /* Update React state when message is added at Firebase Database */
    //   let message = { text: snapshot.val(), id: snapshot.key };
    //   this.setState({ messages: [message].concat(this.state.messages) });
    // })
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
                  { /* Render the list of messages */
                    this.state.students.map((student) => {
                      return (
                        <tr>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.grade}</td>
                          <td>{student.id}</td>
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