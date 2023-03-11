import React from "react";
import Course from './Course';

const App = () => {
  const course = {
    id:1,
    name:'Half Stack application development',
    parts: [
      {
      name:'Fundamental of React',
      exercises: '10',
      id:1
      },
      {
      name:'Using props to pass data',
      exercises:7,
      id:2
      },
      {
      name:'State of component',
      exercises:14,
      id:3
      }
      
    ]
  }
  return (
    <div>
   <h1> <Course name = {course.name}/></h1>
   <Course name = {course.parts[0].name} exercises = {course.parts[0].exercises}/>
   <Course name = {course.parts[1].name} exercises = {course.parts[1].exercises}/>
   <Course name = {course.parts[2].name} exercises = {course.parts[2].exercises}/> 
    </div>
  );
}

export default App
