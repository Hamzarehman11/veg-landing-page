import React from "react";
import className from "classnames";


export default function Button({children, yellowBtn, whiteBtn,smallBtn,largeBtn,onClick}) {

    const classes = className('btn',{
        yellowBtn,
        whiteBtn,
        smallBtn,
        largeBtn,
    });



    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}