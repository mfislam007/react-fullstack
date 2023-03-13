import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App2 = () => {
  const courses = {
      id: 1,
      name: "Half Stack application development",
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
        },
      ]
    }
  
  return (
    <div>
      <Header name={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </div>
  );
}

export default App2;