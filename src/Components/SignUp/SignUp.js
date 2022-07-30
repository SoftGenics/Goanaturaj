import React, {useState} from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import "./SignUp.css";
import axios from 'axios';
const SignUp = () => {
  const [email,setemail]=useState([]);
  const [name, setname]= useState([]);
  const [password, setpassword] = useState([]);
  const [Number ,setnumber] = useState("125637");
  
  console.log(setnumber)
  const submitform = (e) => {
    e.preventDefault();
    axios.post('https://golden.softgenics.in/api/users',{
      name:name,
      email:email,
      Number:Number,
      password:password
    }).then((res)=>{
      if(res && res.status===200){
        alert('signup success')
      }else(
        alert("failed")
      )
    })
  }
  return (
    <div className='signup'>
      <Form onSubmit={(e) => submitform(e)}>
      <InputGroup className="mb-4 mt-3">
        <InputGroup.Text id="basic-addon1"><i className='fas fa-at' /></InputGroup.Text>
        <Form.Control
          placeholder="E-mail"
          aria-label="email"
          type='email'
          aria-describedby="basic-addon1"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
      </InputGroup>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text ><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Full Name"
          aria-label="Full Name"
          type='text'
          value={name}
          onChange={(e)=>setname(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon3"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          type='password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          aria-describedby="basic-addon3"
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text id="basic-addon3"><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Confirm Password"
          aria-label="Password"
          type='password'
          aria-describedby="basic-addon4"
        />
      </InputGroup>
      <Form.Check label="Subscribe to our newsletter" />
      <div className='d-flex'>
      <Form.Check label="I accept the" /> <p className='ms-1'> Terms of Service and Privacy Policy</p>
      </div>
      <button type="submit" className='btn-signin mt-3'>Sign In</button>
      </Form>
    </div>
  )
}

export default SignUp