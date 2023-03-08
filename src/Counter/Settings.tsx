import React, {ChangeEvent} from "react";
import classes from "./Settings.module.css";
import {Button} from "./Button";
import {useDispatch} from "react-redux";
import {setCounterAC,setMaxValueToLocalStorageAC,setStartValueToLocalStorageAC} from "../bll/counter-reducer";

type SettingsPropsType = {
    setStart: (start: number)=>void
    setMax: (max: number)=>void
    max: number
    start: number
}
export const Settings = (props: SettingsPropsType) => {

    let errorInput = (props.start < 0 || props.max < 0) ? classes.red : ''
    let disabled = props.max < props.start || props.start < 0 || props.max < 0
    const dispatch = useDispatch()

    const onChandeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(+e.currentTarget.value)
    }
    const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStart(+e.currentTarget.value)
    }
    const saveSettings = () => {
        dispatch(setMaxValueToLocalStorageAC(props.max))
        dispatch(setStartValueToLocalStorageAC(props.start))
        localStorage.setItem('startValue', props.start.toString())
        localStorage.setItem('maxValue', props.max.toString())
        dispatch(setCounterAC(props.start))
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