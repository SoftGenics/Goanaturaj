import React, {useState} from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import "./SignUp.css";
import axios from 'axios';
const SignUp = () => {
  const [email,setemail]=useState([]);
  const [fname, setfname]= useState([]);
  const [password, setpassword] = useState([]);
  const [number ,setnumber] = useState("125637");
  console.log(setnumber)
  const handleSignUp =(e)=>{
    e.preventDefault();
    axios.post('https://golden.softgenics.in/api/addUser',{
      email:email,  
      name:fname,
      number:number,
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
      <Form onSubmit={(e)=>handleSignUp(e)}>
      <InputGroup className="mb-4 mt-3">
        <InputGroup.Text ><i className='fas fa-at' /></InputGroup.Text>
        <Form.Control
          placeholder="E-mail"
          type='email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
      </InputGroup>
        <InputGroup className="mb-4 mt-3">
        <InputGroup.Text ><i className='fas fa-user' /></InputGroup.Text>
        <Form.Control
          placeholder="Full Name"
          type='text'
          value={fname}
          onChange={(e)=>setfname(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Password"
          type='password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-3 ">
        <InputGroup.Text ><i className='fas fa-lock' /></InputGroup.Text>
        <Form.Control
          placeholder="Confirm Password"
          aria-label="Password"
          type='password'
        
        />
      </InputGroup>
      <Form.Check label="Subscribe to our newsletter" />
      <div className='d-flex'>
      <Form.Check label="I accept the" /> <p className='ms-1'> Terms of Service and Privacy Policy</p>
      </div>
      <button className='btn-signin mt-3' onClick={handleSignUp}>Sign In</button>
      </Form>
    </div>
  )
}

export default SignUp