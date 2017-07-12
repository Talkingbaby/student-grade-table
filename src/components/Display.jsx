import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

const studentArr = [{name: 'kyle', course: 'cooking', grade: 89}];

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          student: {
            name: '',
            course: '',
            grade: undefined,
          } 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
    }
    

    handleSubmit(event) {
        event.preventDefault();
        studentArr.push(this.state.student);
        console.log('pushed!');
        console.log(studentArr);
    }

    handleChangeName(event) {
        this.setState({ student: {name: event.target.value}});
         console.log('state: ', this.state.student.name);
    };

      handleChangeCourse(event) {
        this.setState({ student: {course: event.target.value}});
        console.log('state: ', this.state.student.course);
      };

      handleChangeGrade(event) {
        this.setState({ student: {grade: event.target.value}});
        console.log('state: ', this.state.student.grade);
      };
        


  render() {
    //   var name = null;
    //   var course = null;
    //   var grade = null;
    //   //Variable for the new student object:
    //   var newStudent = null;
    //   //Variable to store average grade:
    //   var averageGrade = null;
    //   //Variable for student object position in the student array:
    //   var index = null;

    return (
      <div>
        <Form onclick={this.handleSubmit} 
              onchangeName={this.handleChangeName} 
              onchangeCourse={this.handleChangeCourse} 
              onchangeGrade={this.handleChangeGrade} 
              student={this.state.student}
        />
        <Table studentArr={studentArr} />
      </div>
    );
  }
}