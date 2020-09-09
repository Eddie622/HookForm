import React from 'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;

    const onChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form>
            <div>
                <label htmlFor="firstName">FirstName: </label>
                <input type="text" onChange={onChange} name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">LastName: </label>
                <input type="text" onChange={onChange} name="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={onChange} name="email" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" onChange={onChange} name="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="text" onChange={onChange} name="confirmPassword" />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}

export default UserForm;