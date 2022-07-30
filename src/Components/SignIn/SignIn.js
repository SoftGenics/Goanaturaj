import axios from 'axios';
import React, {useState} from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  let isLoggedIn=true;
  const authToken = JSON.parse(localStorage.getItem("token"));
    if(authToken===null){
      isLoggedIn=false
    }
  

    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [validationErrors, setValidationErrors] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState("");
  
    const handleSubmit = () => {
          
      console.log("email",email)
      axios
        .post("https://golden.softgenics.in/api/userlogin", {email: email,
        password: password}
       )
        .then((response) => {
          if (response && response.status === 200) {
          
            console.log(response.data)
            if (response.data) {
              setValidationErrors(false);
              const data = response.data;
              console.log(data)
              localStorage.setItem("token", JSON.stringify(data.token));
              localStorage.setItem("id",(data.id));
              localStorage.setItem("email",(data.email));
              
             navigate("/")
            }
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.status
          ) {
            console.log(error.response.data.status);
            setValidationErrors(true);
            setValidationMessage("Invalid Email / Password");
            
          }
        });
    };
  return (
    <div className='signin'>
        <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon1"><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Username/E-mail"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon2"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          type='password'
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </InputGroup>
      <div className='d-flex'>
      <Form.Check label="Remember Me" />
      <p className='ms-auto'>Forgot password ?</p>
      </div>
      <button className='btn-signin mt-3'>Sign In</button>
      </Form>
    </div>
  )
}

export default SignIn