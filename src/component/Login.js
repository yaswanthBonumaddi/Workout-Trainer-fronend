import React,{useState} from 'react';
import styled from "styled-components";
import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = ()=> {
      const [data,setData] = useState({
        email:"",
        password:""
      })

      const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
        
      }
      const submithandler = async e =>{
        e.preventDefault();
        
        await axios.post('http://localhost:5440/login',data).then(
          res => localStorage.setItem('token',res.data.token)).catch(err=>alert(err.response.data.msg))
          setData({email:"",password:""})
      }

      if (localStorage.getItem('token')){
        return <Navigate replace to='/home'/>
      }
      
    
  return (
    
    <Container> 
      <form onSubmit={submithandler}>
        <h1>Sign In</h1>
        <p>Sign into Your Account</p>
        <input type='email' name='email' value={data.email} placeholder='Email Address'  onChange={changehandler}/><br/>
        <input type='password' name='password' value={data.password} placeholder='Password' onChange={changehandler}/><br/>
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to="/register" style={{"textDecoration": "none"}}><span>Sign Up</span></Link></p>
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

    h1{
      font-size:50px;
      margin-bottom:15px;
      
    }
    p{
      margin-bottom:10px;
    }

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
    }
    input{
      height: 40px;
    margin:5px;
    width: 300px;
    border-radius: 5px;
    padding-left:10px;
    }
    span{
      color: #0a4857;
      font-weight:bold;
      
    }
`;

export default Login