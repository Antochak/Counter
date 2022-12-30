import React from "react";
import classes from "./Counter.module.css";

type ButtonType = {
    name: string
    callback: ()=>void
    disabled?: boolean
}

export const Button = (props: ButtonType) => {
  const ButtonClass = (props.disabled ? classes.disabled : classes.button)
 //    const ButtonDisable = props.xCount === 0 ?
    return (
        <>
            <button
                onClick={props.callback}
                className={ButtonClass}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </>
    )
}