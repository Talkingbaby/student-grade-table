import React, { Component } from 'react';
import StudentNameInput from './form-components/StudentNameInput';
import StudentCourseInput from './form-components/StudentCourseInput';
import StudentGradeInput from './form-components/StudentGradeInput';

export default class Form extends Component {
    render() {
        return (
            <div className="student-add-form form-group col-sm-3 col-sm-push-9 col-md-3 col-md-push-9 col-sm-3 col-sm-push-9 col-lg-3 col-lg-push-9">
                <form role="form" className="form-group">
                    <h4>Add Student</h4>
                    <StudentNameInput onchange={this.props.onchangeName} name={this.props.name} />
                    <StudentCourseInput onchange={this.props.onchangeCourse} course={this.props.course}/>
                    <StudentGradeInput onchange={this.props.onchangeGrade} grade={this.props.grade}/>
                    <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={this.props.onclick}>Add</button>
                        <button type="button" className="btn btn-default" onClick="cancelClicked()">Cancel</button>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-warning" onClick="getDataFromServer()">Get Data From Server</button>
                    </div>
                </form>
            </div>
        )
    }
}