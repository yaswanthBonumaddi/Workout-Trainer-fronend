import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import  Styled  from 'styled-components';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Card   >
      <div className='card-detail-container'>
      <img src={gifUrl} alt={name} loading="lazy" className=" detail-card-img" />
      <div  className='card-details-text'>
        <h1 style={{ fontSize: '30px',fontWeight:'700',textTransform:'capitalize', marginBottom:'30px' }} >
          {name}
        </h1>
        <p style={{ fontSize:  '18px',color:'#4F4C4C', marginBottom:'30px'  }}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div style={{ display:'flex',flexDirection:"row", gap:"24px", alignItems:"center", marginBottom:'10px'}}>
            <button style={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px',border:'0px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </button>
            <h2 style={{ fontSize: '20px',textTransform:"capitalize"}}>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
    </Card>
  );
};

export default Detail;


const Card = Styled.div`
.card-detail-container{
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  margin: 20px;
}
.detail-card-img{
      width: 700px;
    height: 700px;
    border-radius: 50px;
margin-right: 20px;
    }

  
  @media screen and (max-width:768px) {
    .card-detail-container{
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
    }
    .detail-card-img{
      width: 300px;
    height: 300px;
    border-radius: 50px;
    margin-right: 20px;
    }
    .card-details-text{
      margin:50px;
  }
`;