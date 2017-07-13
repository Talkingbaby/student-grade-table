import React from 'react';

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

module.exports = StudentGradeInput;