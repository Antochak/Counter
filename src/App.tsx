import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Counter/Settings";
import {useSelector} from "react-redux";
import {AppStateType} from "./bll/store";

function App() {
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const [max,setMax]=useState<number>(JSON.parse( localStorage.getItem('startValue') != null ? JSON.parse(localStorage.getItem('maxValue') || '0') : maxValue))
    const [start,setStart]=useState<number>(JSON.parse( localStorage.getItem('startValue') != null ? JSON.parse(localStorage.getItem('startValue') || '0') : startValue))
  return (
      <div className={'mainApp'}>
        <Counter max={max} start={start}/>
        <Settings setMax={setMax}  setStart={setStart} max={max} start={start}/>
      </div>
  );
}
export default App;
