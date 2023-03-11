import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App1 = () => {
const course = {
    name: 'Half stack application development',
    parts: [
  {
    name:'Fundamentals of react',
    exercises : 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }
]
}
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>

    </div>
  );
}

export default App1;
