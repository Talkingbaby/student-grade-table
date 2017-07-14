import React, { Component } from 'react';
import fire from 'firebase';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] }; // <- set up react state

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let studentsRef = fire.database().ref('students').orderByKey().limitToLast(100);

    studentsRef.on('value', snapshot => {
      var students = [];
      snapshot.forEach(function(childSnapshot) {
        var student = childSnapshot.val();
        student['.key'] = childSnapshot.key;
        students.push(student);
      });

      this.setState({
        students: students
      });
    })
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }
  

  handleDelete(key) {
    let studentsRef = fire.database().ref('students');
    studentsRef.child(key).remove();

    // studentsRef.on('value', snapshot => {
    //   /* Update React state when message is added at Firebase Database */
    //   let students = snapshot.val();
    //   this.setState({ students: [students].concat(this.state.students)});
    //   console.log('students state after delete: ', this.state.students);
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
                        <tr key={student['.key']}>
                          <td>{student.name}</td>
                          <td>{student.course}</td>
                          <td>{student.grade}</td>
                          <td><button type="button" className="btn btn-danger" onClick={this.handleDelete.bind(null, student['.key'])}>Danger</button></td>
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