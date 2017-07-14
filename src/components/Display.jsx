import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';
import fire from '../fire';
import PageHeader from './PageHeader';

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            course: '',
            grade: '',
            students: [],
            gradeAvg: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
    }

    componentWillMount() {
      /* Create reference to messages in Firebase Database */
      let studentsRef = fire.database().ref('students').orderByKey().limitToLast(100);

      studentsRef.on('value', snapshot => {
        let students = [];
        let totalGrade = 0;
        snapshot.forEach(function (childSnapshot) {
          let student = childSnapshot.val();
          student.id = childSnapshot.key;
          students.push(student);
        });

        students.forEach((student) => {
          totalGrade += parseInt(student.grade, 10);
        });

        this.setState({
          students: students,
          gradeAvg: totalGrade/students.length
        });
      })
    }

    componentWillUnmount() {
      this.firebaseRef.off();
    }
    
    handleSubmit(event) {
      event.preventDefault();
      /* Send the message to Firebase */
      if(this.state.name === '' || this.state.course === '' || this.state.grade === '') {
        alert("All fields must have values");
      } else {
        fire.database().ref('students').push({
        name: this.state.name,
        course: this.state.course,
        grade: this.state.grade,
      });

      this.setState({
          name: '',
          course: '',
          grade: ''
      });
      }
    }

    handleCancel(event) {
      event.preventDefault();
      this.setState({
          name: '',
          course: '',
          grade: ''
      });
    }

    handleDelete(key) {
      let studentsRef = fire.database().ref('students');
      studentsRef.child(key).remove();
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeCourse(event) {
      this.setState({ course: event.target.value });
    }

    handleChangeGrade(event) {
      this.setState({ grade: event.target.value });
    }
        


  render() {
    return (
      <div>
        <PageHeader average={this.state.gradeAvg}/>
        <Form 
              handleSubmit={this.handleSubmit} 
              handleCancel={this.handleCancel}
              onchangeName={this.handleChangeName} 
              onchangeCourse={this.handleChangeCourse} 
              onchangeGrade={this.handleChangeGrade} 
              name={this.state.name}
              course={this.state.course}
              grade={this.state.grade}
        />
        <Table
        students={this.state.students}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}