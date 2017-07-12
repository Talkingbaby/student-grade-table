import React from 'react';

export default class Students extends React.Component {
  students = this.props.studentArr.map(function(student) {
      return (
        <tr>
          <td>{student.name}</td>
          <td>{student.course}</td>
          <td>{student.grade}</td>
        </tr>
      );
    })


  render() {

    return {students};
  }
}

/*const students = this.props.student.map((student) => {
        <tr>
          <td>{student.name}</td>
          <td>{student.course}</td>
          <td>{student.grade}</td>
        </tr> 
  })*/
