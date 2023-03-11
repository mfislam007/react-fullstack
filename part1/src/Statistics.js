import React from "react";

const StatisticLine = (props)=>{
    return(
        <div>
          {props.text} {props.value}
        </div>
    )

}

const Statistics =(props)=>{

if ((props.good || props.neutral || props.bad) === 0){
    return (
        <div>
        <h1>statistics</h1>
        <h2>No feedback given</h2>
        </div>
    )
}
    return(
        <div>
        <h1>statistics</h1>
        <StatisticLine text = "good" value = {props.good}/>
        <StatisticLine text = "neutral" value = {props.neutral}/>
        <StatisticLine text = "bad" value = {props.bad}/>
        <StatisticLine text = "all" value = {props.good + props.neutral + props.bad}/>
        <StatisticLine text = "average" value = {((props.good)*1 + (props.neutral)*0 + (props.bad)*(-1))/(props.good + props.neutral + props.bad)}/>
        <StatisticLine text = "positive" value = {(props.good)/(props.good + props.neutral + props.bad)*100 + "%"} />
        </div>
    )
}

export default Statistics