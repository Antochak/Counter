import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Counter/Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('startValue') || '0'))
    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || '0'))
    const [count, setCount] = useState(startValue)
    const [disabled, setDisabled] = useState(false)
    const [max,setMax]=useState(maxValue)
    const [start,setStart]=useState(startValue)

    useEffect(()=> {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])
    useEffect(()=> {
        let stringMaxValue = localStorage.getItem('maxValue')
        if(stringMaxValue){
            let newMaxValue:number = JSON.parse(stringMaxValue)
            setMaxValue(newMaxValue)
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])
    useEffect(()=> {
        let stringValue = localStorage.getItem('startValue')
        if(stringValue){
            let newValue:number = JSON.parse(stringValue)
            setStartValue(newValue)
        }
    },[])

    const maxValueCallback = (valueMax: number) => {
        setMaxValue(valueMax)
    }
    const startValueCallback = (valueStart: number) => {
        setStartValue(valueStart)
    }
  return (
      <div className={'mainApp'}>
        <Counter startValue={startValue}
                 setStartValue={setStartValue}
                 maxValue={maxValue}
                 count={count}
                 setCount={setCount}
                 disabled={disabled || maxValue == count}
                 setMax={setMax}
                 setStart={setStart}
                 max={max}
                 start={start}/>
        <Settings MaxValue={maxValue}
                  startValue={startValue}
                  setCount={setCount}
                  setDisabled={setDisabled}
                  startValueCallback={startValueCallback}
                  maxValueCallback={maxValueCallback}
                  setStart={setStart}
                  setMax={setMax}
                  max={max}
                  start={start}/>
      </div>
  );
}

export default App;


// localStorage.getItem('startValue') != null ? JSON.parse(localStorage.getItem('startValue') || '0') : 0