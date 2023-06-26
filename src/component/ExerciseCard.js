import React from 'react';
import { Link } from 'react-router-dom';


const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div direction="row">
      <button style={{ marginLeft: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize',padding:"5px 10px 5px 10px",border:'0px' }}>
        {exercise.bodyPart}
      </button>
      <button style={{ marginLeft: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', padding:"5px 10px 5px 10px",border:'0px' }}>
        {exercise.target}
      </button>
    </div>
    <h4 style={{marginLeft:"21px", color:"#000", fontWeight:"bold",  marginTop:'20px', padding:"10px", textTransform:"capitalize"}}>
      {exercise.name}
    </h4>
  </Link>
);

export default ExerciseCard;