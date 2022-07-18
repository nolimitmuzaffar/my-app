import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",

  });
  const [submitted, setSubmitted] =useState(false);
  const [valid, setValid ] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleUsernameInputChange = (event) => {
    setValues({...values, username: event.target.value})
  }
  const handlePasswordInputChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email && values.username && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message"> Thank you for registering </div>:null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span>Please enter a first name</span>: null}
       
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span>: null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter email</span>: null}

        <input
          onChange={handleUsernameInputChange}
          value={values.username}
          className="form-field"
          placeholder="Username"
          name="username"
        />
        {submitted && !values.username ? <span>Please enter a username</span>: null }
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          type="password"
          className="form-field"
          placeholder="Password"
          name="password"
        />
        {submitted && !values.password ? <span>Please enter a password</span>: null}
        
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
