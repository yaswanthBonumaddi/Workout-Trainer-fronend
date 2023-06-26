import React from 'react';
import banner from '../assets/images/banner.png';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const Home = () => {



  return (
    
      <Herobanner>
        <div className='matter-div'>
        <p className='hero-caption'>Fitness Club</p>
        <h1 className='hero-heading'>Sweat, smile <br/> And Repeat</h1>
        <p className='hero-para'>check out the most effective exercises personalized to you</p>
        <Link to='/exercises'><button className='hero-btn'>Explore Exercises</button></Link>
        <p className='hero-optimise'>Exercise</p>
        </div>
        <img src={banner}  alt='banner' className='hero-banner-img '/>
      </Herobanner>
      
      
  )
}

export default Home

const Herobanner = styled.div`
  position:relative;
  padding: 20px;
  
  .matter-div{
    position: absolute;
    top: 150px;
    margin-left: 40px;
  }

  .hero-caption{
    color: #FF2625;
    font-weight:600;
    font-size: 40px;
  }
  .hero-heading{
    font-weight:700;
    margin-bottom:23px;
    margin-top:30px;
    font-size: 70px;
  }
  .hero-para{
      font-size: 22px;
      font-family:Alegreya;
      line-height: 35px;
    }
  .hero-btn{
    margin-top:45px;
    text-decoration:none;
    width:300px;
    text-align: center;
    background:#FF2625;
    padding: 14px;
    font-size: 22px;
    text-transform:none;
    color:white;
    border-radius:4px;
    border:0px;
  }
  .hero-optimise{
    font-weight:600;
    color: #FF2625;
    font-size:200px;
    opacity: 0.1;
    margin-right:20px;
  }
  @media screen and (max-width:992px) {
  .hero-banner-img {
    display: none;
  }
  .hero-optimise{
    font-size:150px;
  }
  }
`;