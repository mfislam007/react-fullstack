import React from "react";

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
      return (sum + part.exercises)
    }, 0);
  
    return <strong>total of {total} exercises</strong>;
  };
  
  export default Total;