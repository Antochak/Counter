import React, {ChangeEvent, useState} from "react";
import classes from "./Counter.module.css";
import {Button} from "./Button";

export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [inputValue, setInputValue] = useState<number>(0)
    let countClassName = count == inputValue ? classes.red : ''

    const counterInc = () => {
        if (count <= inputValue) {
            setCount(count + 1)
        }
    }
    const counterClear = () => {
        setCount(0)
    }
    const onChandeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.currentTarget.value)
    }
    return (
        <div className={classes.mainBlock}>
            <div className={classes.display}>
                <div className={classes.view }>
                    <div className={countClassName}>
                        {count}
                    </div>
                </div>
                <div className={classes.buttonsContainer}>
                    <Button name={'Inc'} callback={counterInc}  disabled={count == inputValue}/>
                    <div className={classes.inputBlock}>
                        Введите максимальное значение:
                        <input type={'number'} onChange={onChandeInput} value={inputValue}/>
                        max = {inputValue}
                    </div>
                    <Button name={'Reset'} callback={counterClear} disabled={count == 0}/>
                </div>
                <div >


                </div>
            </div>
        </div>
    )
}