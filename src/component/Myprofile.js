import React,{useState,useEffect} from 'react'
import axios from 'axios'; 
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {MdRateReview} from 'react-icons/md'
import './profile.css'

const Myprofile = () => {
    const [data,setData] = useState([]);
    const [review,setReview] = useState([]);
  useEffect(()=>{
     axios.get('http://localhost:4040/myprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res => setData(res.data))
  },[])

  useEffect(()=>{
    axios.get('http://localhost:4040/myreview',{
     headers:{
       'x-token':localStorage.getItem('token')
     }
   }).then(res => setReview(res.data))
 },[])

  if (!localStorage.getItem('token')){
    return <Navigate replace to="/login"/>
  }
  
  console.log(review)

  return (
    <Cont>
    <Sidebar>
    <Container>
      <Link to='/'><Image src='https://res.cloudinary.com/dsreftmf4/image/upload/v1686978943/final_gjzen4.png' alt='logo'/></Link>
      <ul>
        <li><Link to='/home' style={{color:"#fff",textDecoration:"none"}}>All Profiles</Link></li>
        <li><Link to='/login' onClick={()=>localStorage.removeItem('token')} style={{color:"#fff",textDecoration:"none"}}>Logout</Link></li>
      </ul>
    </Container>
    </Sidebar>
    <Main>
    <Div> 
    
    <Profilecontainer >
    
      <div className='avat'>
        
          <img src='https://res.cloudinary.com/dsreftmf4/image/upload/v1686986111/male-avatar-small-removebg-preview_ofd9pu.png' alt='avatar'/>
          
      </div>
      <div className='inf'>
            <h4> Name : {data.fullname} </h4>
            <p>Email : {data.email}</p>
            <p>Skills: {data.skill}</p>
            <p>Mobile No: {data.mobile}</p>
            <p>Location : India</p>
      </div>
      
    </Profilecontainer>
        <ReviewHeading >
        <MdRateReview size={'40px'}/> <h1> Reviews and Ratings</h1>
        </ReviewHeading>
        <Unlist>
          {review.map(item=>
            <li style ={{lineHeight:1}}>
              <p style ={{fontSize:'20px',fontWeight:"bold"}}>{item.taskprovider}</p>
              <p style ={{fontSize:'20px',fontWeight:"bold"}}>{item.rating}/5</p>
              </li>
          )}
        </Unlist>
    </Div>
    </Main>
    </Cont>
  )
}

export default Myprofile

const Unlist = styled.ul`
    border: 2px solid #858585;
    border-radius: 10px;
    margin: 10px;
    list-style-type: square;
`;


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-left: 10px;
  ul{
    color: #fff;
    list-style-type:none;
    display: flex;
    justify-content: center;
    width: 50%;
  }
  li{
    margin-right:50px;
    font-weight: bold;
  }
  
`;

const Image = styled.img`
    height: 50px;
`;




const Cont = styled.div`
max-height: 100vh;
max-width: 100vw;
overflow: hidden;
display: flex;
flex-direction:column;
background-color:#f4f5f0;
box-sizing:content-box;
`;

const Sidebar = styled.div`
width: 98vw;
height: 10vh;
background-color:black;
margin-left:15px;
margin-top:15px;
border-radius: 10px;
`;

const Main = styled.div`
width: 98vw;
height: 94vh;
background-color: #fff;
margin:15px;
border-radius:10px;
overflow: auto;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewHeading = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 margin: 10px;
`;

const Profilecontainer = styled.div`
    height: 250px;
    background-color:#f4f5f0;
    width: 97%;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 10px;
    align-items: center;
    box-sizing: content-box;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    img{
      height: 250px;
    }
    `;

