import React, {ChangeEvent, useState} from "react";
import classes from "./Settings.module.css";
import {Button} from "./Button";

type InputsPropsType = {
    maxValueCallback: (inputMaxValue: number)=>void
    startValueCallback: (inputStartValue: number)=>void
    MaxValue: number
    startValue: number
    setCount:(count: number)=>void
    setDisabled:(value: boolean)=>void
    max: number
    start: number
    setMax:(max: number)=>void
    setStart:( start: number)=>void
}

export const Settings = (props: InputsPropsType) => {
    let errorInput = (props.start < 0 || props.max < 0) ? classes.red : ''
    let disabled = props.max < props.start || props.start < 0 || props.max < 0

    const onChandeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(+e.currentTarget.value)
        props.setDisabled(true)
    }
    const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStart(+e.currentTarget.value)
        props.setDisabled(true)
    }
    const saveSettings = () => {
        props.maxValueCallback(props.max)
        props.startValueCallback(props.start)
        props.setCount(props.start)
        props.setDisabled(false)
    }
   
    return (
        <div className={classes.mainBlock}>
            <div className={classes.display}>
                <div className={classes.view }>
                    <div className={classes.inputBlock}>
                        Введите максимальное значение:
                        <input type={'number'}
                               onChange={onChandeInputMaxHandler}
                               value={props.max}
                               className={errorInput}/>
                        max = {props.max}
                    </div>
                    <div className={classes.inputBlock}>
                        Введите Стартовое значение:
                        <input type={'number'}
                               onChange={onChangeInputStartHandler}
                               value={props.start}
                               className={errorInput}/>
                        start = {props.start}
                    </div>
                </div>
                <div className={classes.buttonsContainer}>
                    <Button name={'Set'}
                            callback={saveSettings}
                            disabled={disabled}/>
                </div>
            </div>
        </div>
    )
}