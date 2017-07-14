import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';
import fire from '../fire';

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            course: '',
            grade: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
    }
    
    handleSubmit(event) {
      event.preventDefault();
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

    handleCancel(event) {
      event.preventDefault();
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
        <Table />
      </div>
    );
  }
}