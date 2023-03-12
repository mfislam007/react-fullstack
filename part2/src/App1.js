import React from "react";
//import Header from "./Header";
//import Content from "./Content";
//import Total from "./Total";
import Course from "./Course";

const App1 = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name:"Routing",
          exercises:3,
          id:1
        },
        {
          name:"Middlewares",
          exercises:7,
          id:2
        },
      
      ]
    }
  ]
  
  return (
    <div>
      <h1>Web development curriculum</h1>
    {/*   <Header/>
      <Course courses = {courses[0].name}/>
      <Content parts= {courses[0].parts}/>
      <Total parts= {courses[0].parts}/>
      <Course courses = {courses[1].name}/>
      <Content parts= {courses[1].parts}/>
      <Total parts={ courses[1].parts}/>*/}
      {courses.map((course) => (
      <Course key = {course.id} course = {course}/>
      ))}
    </div>
  );
}

export default App1;