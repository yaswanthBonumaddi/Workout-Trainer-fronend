import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo-black-small.png'
const Basepage = ()=> {

 
  return (
    <Container> 
        <img src={Logo} alt='Workout-trainer'/> 
        <div>
        <Link to='/login'><button>Login </button></Link> 
        <Link to='/register'><button>Register </button></Link>
        </div>
        
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
    line-height:1;
 
  
    img{
        height: 120px;
   
    }
    button{
        border-radius: 5px;
        border:1px solid #fff;
        color: #fff;
        background-color: #000;
        font-size: 15px;
        cursor: pointer;
        height: 40px;
        width: 150px;
        margin: 30px 20px 20px 20px;
        transform: scale(1, 1);
    }
    button:hover{
      transform: scale(1.05, 1.05);
      border-radius: 15px;
    }
    @media screen and (max-width:568px) {
      img{
        height: 60px;
      }
      button{
        border-radius: 5px;
        border:1px solid #fff;
        color: #fff;
        background-color: #000;
        font-size: 10px;
        cursor: pointer;
        height: 25px;
        width: 100px;
        margin: 30px 20px 20px 20px;
        transform: scale(1, 1);
      }
    }
`;

export default Basepage