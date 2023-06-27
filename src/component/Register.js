import React,{useState} from 'react';
import styled from "styled-components";
import { Link , Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = ()=> {
  const [message,setMessage] = useState({});
  const [errorwarning,setErrorwarning] = useState("") 
  const [data,setData] = useState({
    username:"",
    email:"",
    mobile:"",
    password:"",
    confirmpassword:""
  })
  
  const changehandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
    
  }

  const submithandler = async e =>{
    e.preventDefault();
    
    await axios.post('http://localhost:5440/register',data).then(response=>{ setErrorwarning(response.data.msg)
    setMessage(response.data)
  }).catch(err=>setErrorwarning(err.response.data.msg)
  );
  }
  

  if (message.status === "ok"){
    return <Navigate replace to='/login'/>
  }
    
let cla=null

if (errorwarning === 'User Registered successfully'){
   cla = 'msg-green'
}else{
   cla='msg-red'
}

  return (
    <Container> 
      <form onSubmit={submithandler}>
        <h1>Sign Up</h1>
        <p>Create Your Account</p>
        <Inputs type='text' name='username' onChange={changehandler} placeholder='Name'/><br/>
        <Inputs type='email' name='email' onChange={changehandler} placeholder='Email Address'/><br/>
        <Inputs type='text' name='mobile' onChange={changehandler} placeholder='Mobile'/><br/>
        <Inputs type='password' name='password' onChange={changehandler} placeholder='Password'/><br/>
        <Inputs type='password' name='confirmpassword' onChange={changehandler} placeholder='Confirm Password'/><br/>
        <p className={cla}>
          {errorwarning ? errorwarning :null}
        </p>
        <button type='submit'>Register</button>
        <p>Already have an account? <Link to="/login"  style={{"textDecoration": "none"}}><span>Sign In</span></Link></p>
        </form>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #FFFAFB;
    
    button{
      border-radius: 5rem;
        border: none;
        background-color: black;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        height: 40px;
        width: 150px;
        margin: 20px 20px 20px 20px;
        text-align:center;
    }
    h1{
      font-size:50px;
      margin-bottom:15px;
    }
    span{
      color: #0a4857;
      font-weight:bold;
    }
    label{
      font-size: 10px;
    }
    p{
      margin-bottom:10px;
    }
    .msg-red{
      color:red;
      margin: 5px;
    }
    .msg-green{
      color:green;
      margin: 5px;
    }
`;


const Inputs = styled.input`
    height: 40px;
    margin:5px;
    width: 300px;
    border-radius: 5px;
    padding-left:10px;
`;



export default Register