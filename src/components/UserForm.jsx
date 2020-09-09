import React, { useState } from 'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const isVerifiedLength = (valueLength) => {
        if(valueLength > 0){
            return true;
        }
        return false;
    }

    const onChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        switch (e.target.name) {
            case 'firstName':
                isVerifiedLength(e.target.value.length-2)?
                setFirstNameError(""):
                setFirstNameError("First name must be at least 2 characters");
                break;
            case 'lastName':
                isVerifiedLength(e.target.value.length-2)?
                setLastNameError(""):
                setLastNameError("Last name must be at least 2 characters");
                break;
            case 'email':
                isVerifiedLength(e.target.value.length-2)?
                setEmailError(""):
                setEmailError("Email must be at least 2 characters");
                break;
            case 'password':
                isVerifiedLength(e.target.value.length-8)?
                setPasswordError(""):
                setPasswordError("Password field must be at least 8 characters");
                inputs['confirmPassword'] !== e.target.value?
                setConfirmPasswordError("Passwords must match"):
                setConfirmPasswordError("");
                break;
            case 'confirmPassword':
                inputs['password'] !== e.target.value?
                setConfirmPasswordError("Passwords must match"):
                setConfirmPasswordError("");
                break;
            default:
        }
    };

    return(
        <form>
            <div>
                <label htmlFor="firstName">FirstName: </label>
                <input type="text" onChange={onChange} name="firstName" />
                {
                    firstNameError? 
                    <span style={{color:'red'}}>{firstNameError}</span>:
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">LastName: </label>
                <input type="text" onChange={onChange} name="lastName" />
                {
                    lastNameError? 
                    <span style={{color:'red'}}>{lastNameError}</span>:
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={onChange} name="email" />
                {
                    emailError? 
                    <span style={{color:'red'}}>{emailError}</span>:
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" onChange={onChange} name="password" />
                {
                    passwordError? 
                    <span style={{color:'red'}}>{passwordError}</span>:
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="text" onChange={onChange} name="confirmPassword" />
                {
                    confirmPasswordError? 
                    <span style={{color:'red'}}>{confirmPasswordError}</span>:
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}

export default UserForm;