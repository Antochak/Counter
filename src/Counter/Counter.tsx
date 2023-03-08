import React from "react";
import classes from "./Counter.module.css";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incCounerValueAC, resetCounterAC} from "../bll/counter-reducer";

type CounterPropsType = {
    max: number
    start: number
}
export const Counter = (props: CounterPropsType) => {

    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const dispatch = useDispatch()

    let countClassName = count == maxValue ? classes.red : ''

    const counterInc = () => {
        if (startValue <= maxValue) {
           dispatch(incCounerValueAC())
        }
    }
    const counterClear = () => {
        dispatch(resetCounterAC(startValue))
    }
    return (
        <div className={classes.mainBlock}>
            <div className={classes.display}>
                <div className={classes.view }>
                        {maxValue !== props.max || startValue !== props.start
                            ? <span className={classes.errorText}>"Enter Values and press 'SET'"</span>
                            : <div className={countClassName}>{count}</div>}
                </div>
                <div className={classes.buttonsContainer}>
                    <Button name={'Inc'} callback={counterInc} disabled={count > maxValue - 1}/>
                    <Button name={'Reset'} callback={counterClear} disabled={count == startValue}/>
                </div>
            </div>
        </div>
    )
}