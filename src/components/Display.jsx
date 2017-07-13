import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';
import fire from '../fire';

const studentArr = [{name: 'kyle', course: 'cooking', grade: 89}];

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            course: '',
            grade: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
    }
    
    handleSubmit(event) {
      event.preventDefault(); // <- prevent form submit from reloading the page
      /* Send the message to Firebase */
      fire.database().ref('students').push({
        name: this.state.name,
        course: this.state.course,
        grade: this.state.grade
      });
      this.setState({
          name: '',
          course: '',
          grade: ''
      });
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    };

      handleChangeCourse(event) {
        this.setState({course: event.target.value});
      };

      handleChangeGrade(event) {
        this.setState({grade: event.target.value});
      };
        


  render() {
    return (
      <div>
        <Form onclick={this.handleSubmit} 
              onchangeName={this.handleChangeName} 
              onchangeCourse={this.handleChangeCourse} 
              onchangeGrade={this.handleChangeGrade} 
              name={this.state.name}
              course={this.state.course}
              grade={this.state.grade}
        />
        <Table studentArr={studentArr} />
      </div>
    );
  }
}