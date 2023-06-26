import React from 'react';
import { styled } from 'styled-components';
import Logo from '../assets/images/Logo-black-small.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>
        <img src={Logo} alt='Workout Trainer'/>
        </Link>
        <ul>
          <Link to="/" style={{textDecoration:"none",color:"Black"}}><li>Home</li></Link>
          <Link to="/exercises" style={{textDecoration:"none",color:"Black"}}><li>Exercises</li></Link>
        </ul>
      </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  height: 70px;
  background-color:#FFFAFB;
  padding: 10px;
  display: flex;
  align-items:center;
  justify-content: flex-start;
  margin-left: 30px;
  margin-top: 20px;
  img{
    height: 40px;
  }
  ul{
    display: flex;
    list-style-type:none;
    width: 200px;
    align-items: center;
    justify-content: space-around;
    margin-left:100px;
    font-weight:bold;
    font-size:20px;
  }
  @media screen and (max-width:768px) {

    margin-top:5px;
  img {
    height: 35px;
  }

}
@media screen and (max-width:992px) {
  ul{
    margin-left:50px;
  }
  }
`;

