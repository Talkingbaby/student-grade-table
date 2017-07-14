import React, { Component } from 'react';
// import StudentNameInput from './form-components/StudentNameInput';
// import StudentCourseInput from './form-components/StudentCourseInput';
// import StudentGradeInput from './form-components/StudentGradeInput';

function StudentNameInput (props) {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-user"></span>
            </span>
            <input 
                type="text"
                className="form-control"
                name="studentName"
                id="studentName"
                placeholder="Student Name"
                value={props.name}
                onChange={props.onchange}
            />
        </div>
    );
};

function StudentCourseInput (props) {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-list-alt"></span>
            </span>
            <input
                type="text"
                className="form-control"
                name="course"
                id="course"
                placeholder="Student Course"
                value={props.course}
                onChange={props.onchange}
            />
        </div>
    );
};

function StudentGradeInput (props) {
    return (
        <div className="input-group form-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-education"></span>
            </span>
            <input
                type="text"
                className="form-control"
                name="studentGrade"
                id="studentGrade"
                placeholder="Student Grade"
                value={props.grade}
                onChange={props.onchange}
            />
        </div>
    );
};

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
                        <button type="button" className="btn btn-success" onClick={this.props.handleSubmit}>Add</button>
                        <button type="button" className="btn btn-default" onClick={this.props.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}