import React from 'react';

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

module.exports = StudentCourseInput;