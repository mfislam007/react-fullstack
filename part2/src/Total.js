import React from "react";

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
      return (sum + part.exercises)
    }, 0);

    console.log(total)
  
    return <strong>total of {total} exercises</strong>;
  };
  
  export default Total;