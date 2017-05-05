import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

const studentArr = [];

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          courseValue: '', 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleSubmit(event) {
        event.preventDefault();
        let student = {
          course: this.state.courseValue
        };
        studentArr.push(student);
        console.log('pushed!');
        console.log(studentArr);
    }

    handleChange(event) {
        this.setState({ courseValue: event.target.value });
        console.log(event.target.value);
        console.log('state: ', this.state.courseValue);
    }

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
        <Form onclick={this.handleSubmit} onchange={this.handleChange} coursevalue={this.state.courseValue}/>
        <Table student={studentArr} />
      </div>
    );
  }
}