import React from "react";
import App from '../App';
const form = (props) => {
    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };
    return (
        <form>
            <div className="from-group"><label htmlFor="firstName"> First Name</label>
                <input onChange={onChange} type="text" name="firstName" /></div>

            <div className="from-group"> <label htmlFor="lastName"> last Name</label>
                <input onChange={onChange} type="text" name="lastName" /></div>

            <div className="from-group"><label htmlFor="email"> Email</label>
                <input onChange={onChange} type="text" name="email" /></div>

            <div className="from-group"><label htmlFor="password"> Password</label>
                <input onChange={onChange} type="password" name="password" /></div>

            <div className="from-group"><label htmlFor="confirmPassword"> ConfirmPassword:</label>
                <input onChange={onChange} type="password" name="confirmPassword" /></div>


        </form>
    );
};
export default form;