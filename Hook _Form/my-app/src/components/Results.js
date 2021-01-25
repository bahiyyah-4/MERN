import React from 'react';

const results = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    return (
        <div>
            <h2>Your form data</h2>
            <p>first Name:{firstName}</p>
            <p>last Name:{lastName}</p>
            <p>email:{email}</p>
            <p>password:{password}</p>
            <p>confirmPassword :{confirmPassword}</p>

        </div>

    );

};
export default results;