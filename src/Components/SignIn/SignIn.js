import React, {useState} from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './SignIn.css';
const SignIn = () => {
  const [username,setusername] =useState([]);
  const [password,setpassword] =useState([]);
  const handleLogin =()=>{
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
    if(username==="prashant@gmail.com" && password==="12345"){
      localStorage.setItem("token", "ihdhjkbcxvkfdjshlk")
      if(loggedIn===true){
        alert("success")
      }
    }
    else{
      alert("fail")
    }
  }
  return (
    <div className='signin'>
        <Form onSubmit={handleLogin}>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon1"><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Username/E-mail"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={username}
          onChange={(e)=>setusername(e.target.value)}
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
          onChange={(e)=>setpassword(e.target.value)}
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