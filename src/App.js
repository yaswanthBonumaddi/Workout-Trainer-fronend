import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import ExercisesDetailes from './component/ExercisesDetailes';
import Exercises from './component/Exercises';
import './App.css';
import Navbar from './component/Navbar';


const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/exercises' exact Component={Exercises} />
      <Route path='/exercises/:id' exact Component={ExercisesDetailes} />
    </Routes>

    </BrowserRouter>
  )
}

export default App