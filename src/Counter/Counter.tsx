import React, {ChangeEvent, useState} from "react";
import classes from "./Counter.module.css";
import {Button} from "./Button";
import {Settings} from "./Settings";

type CounterPropsType = {
    startValue: number
    setStartValue: (startValue: number)=>void
    maxValue: number
    setCount:(count:number)=>void
    count: number
    disabled: boolean
    max: number
    start: number
    setMax:(max: number)=>void
    setStart:( start: number)=>void
}

export const Counter = (props: CounterPropsType) => {
    let countClassName = props.count == props.maxValue ? classes.red : ''

    const counterInc = () => {
        if (props.startValue <= props.maxValue) {
            props.setCount(props.count + 1)
        }
    }
    const counterClear = () => {
        props.setCount(props.startValue)
    }

    return (
        <div className={classes.mainBlock}>
            <div className={classes.display}>
                <div className={classes.view }>
                        {props.maxValue !== props.max || props.startValue !== props.start
                            ? <span className={classes.errorText}>"Enter Values and press 'SET'"</span>
                            : <div className={countClassName}>{props.count}</div>}
                </div>
                <div className={classes.buttonsContainer}>
                    <Button name={'Inc'} callback={counterInc} disabled={props.disabled}/>
                    <Button name={'Reset'} callback={counterClear}/>
                </div>
            </div>

        </div>
    )
}