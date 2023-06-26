import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Detail from './Detail';


const ExerciseDetailes = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await axios.get(`new-backend-fitness-app.vercel.app/exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData.data[0]);
    };

    fetchExercisesData();
  }, [id]);


  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExerciseDetailes;