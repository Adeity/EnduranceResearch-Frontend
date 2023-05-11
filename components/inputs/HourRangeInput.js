"use client"
import React, {useState} from "react";

function HourRangeInput(props) {
    const {min, totalHours} = props

    const min1Seconds = min * 3600
    const max1Seconds = (min + totalHours) * 3600

    const [value, setValue] = useState(min1Seconds);

    function calculateReadableValue(value) {
        const seconds = value % 86400
        const hours = Math.floor((seconds) / 3600)
        const minutes = (seconds % 3600) / 60

        const hoursString = hours.toString().length === 1 ? "0" + hours : hours
        const minutesSTring = minutes.toString().length === 1 ? "0" + minutes : minutes
        return hoursString + ":" + minutesSTring
    }

    function handleChange(e) {
        setValue(e.target.value)
        props.update(calculateReadableValue(e.target.value))
    }

    return (
        <>
            <div className={"form-text pb-2"}>Nastavte posuvník tak, aby hodnota odpovídala Vaší chtěné odpovědi.</div>
            <input className={"form-control w-3rem"}
                   placeholder={"Posuvníkem nastavte."}
                   type={"text"}
                   disabled={true}
                   data-test={"slider-display-value"}
                   value={props.value !== "" ? props.value : "Posuvníkem nastavte."}/>
            {/*<label htmlFor="customRange3" className="form-label">{props.value}</label>*/}
            <input id={props.inputId}
                   type="range"
                   placeholder={"Posuvníkem nastavte."}
                   value={value}
                   onChange={(e) => handleChange(e)}
                   className="form-range"
                   min={min1Seconds}
                   max={max1Seconds}
                   data-test={"slider-input"}
                   step="900"/>
            <div className="valid-feedback">
                Vpořádku.
            </div>
            <div className="invalid-feedback" data-test={"invalid-feedback-text"}>
                Prosím nastavte posuvník.
            </div>
        </>
    )
}

export default HourRangeInput;