import React, {ChangeEvent, useState} from "react";
import classes from "./Settings.module.css";
import {Button} from "./Button";

type InputsPropsType = {
    maxValueCallback: (inputMaxValue: number)=>void
    startValueCallback: (inputStartValue: number)=>void
    MaxValue: number
    startValue: number
    setCount:(count: number)=>void
}

export const Settings = (props: InputsPropsType) => {
    const [max,setMax]=useState(props.MaxValue)
    const [start,setStart]=useState(props.startValue)

    const onChandeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }
    const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
    }
    const saveSettings = () => {
        props.maxValueCallback(max)
        props.startValueCallback(start)
        props.setCount(start)
    }

    return (
        <div className={classes.mainBlock}>
            <div className={classes.display}>
                <div className={classes.view }>
                    <div className={classes.inputBlock}>
                        Введите максимальное значение:
                        <input type={'number'} onChange={onChandeInputMaxHandler} value={max}/>
                        max = {max}
                    </div>
                    <div className={classes.inputBlock}>
                        Введите Стартовое значение:
                        <input type={'number'} onChange={onChangeInputStartHandler} value={start}/>
                        start = {start}
                    </div>
                </div>
                <div className={classes.buttonsContainer}>
                    <Button name={'Set'} callback={saveSettings} />
                </div>
            </div>

        </div>
    )
}