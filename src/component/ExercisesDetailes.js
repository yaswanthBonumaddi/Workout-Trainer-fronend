import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Detail from './Detail';
import Navbar from './Navbar';



const ExerciseDetailes = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await axios.get(`https://new-backend-fitness-app.vercel.app/exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData.data[0]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    fetchExercisesData();
  }, [id]);



  return (
    <div>
    <Navbar/>
    <Detail exerciseDetail={exerciseDetail} />
    
  </div>
  );
};

export default ExerciseDetailes;