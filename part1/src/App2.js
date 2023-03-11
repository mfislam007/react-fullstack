import React from 'react';
import { useState } from 'react';
import Feedback from './Feedback';
import Button from './Button';
import Statistics from './Statistics';
//import Display from './Display';


const App2 = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () => setGood(good +1)
    const increaseNeutral = () => setNeutral(neutral +1)
    const increaseBad = () => setBad(bad +1)

  return (
    <div>
     <Feedback/>
     <Button
     onClick = {increaseGood}
     text ='good'
     />
      <Button
     onClick = {increaseNeutral}
     text ='neutral'
     />
      <Button
     onClick = {increaseBad}
     text ='bad'
     />
     <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
}

export default App2;

