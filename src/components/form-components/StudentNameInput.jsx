import React from 'react';

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

module.exports = StudentNameInput;