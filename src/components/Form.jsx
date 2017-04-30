import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div className="student-add-form form-group col-sm-3 col-sm-push-9 col-md-3 col-md-push-9 col-sm-3 col-sm-push-9 col-lg-3 col-lg-push-9">
                <form role="form" className="form-group">
                    <h4>Add Student</h4>
                    <div className="input-group form-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-user"></span>
                        </span>
                        <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" />
                    </div>
                        <div className="input-group form-group">
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-list-alt"></span>
                            </span>
                            <input type="text" className="form-control" name="course" id="course"
                                placeholder="Student Course" />
                        </div>
                            <div className="input-group form-group">
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-education"></span>
                                </span>
                                <input type="text" className="form-control" name="studentGrade" id="studentGrade"
                                    placeholder="Student Grade" />
        </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success" onClick="addClicked()">Add</button>
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