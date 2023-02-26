"use client"
import React, {useState} from "react";

function HourRangeInput(props) {
    const {min, totalHours} = props

    const min1Seconds = min * 3600
    const max1Seconds = (min + totalHours) * 3600

    const [value, setValue] = useState(min1Seconds);

    function calculateReadableValue() {
        const seconds = value % 86400
        const hours = Math.floor((seconds) / 3600)
        const minutes = (seconds % 3600) / 60

        const hoursString = hours.toString().length === 1 ? "0" + hours : hours
        const minutesSTring = minutes.toString().length === 1 ? "0" + minutes : minutes
        return hoursString + ":" + minutesSTring
    }

    const readableValue = calculateReadableValue()

    function handleChange(e) {
        setValue(e.target.value)
        props.update(readableValue)
    }

    return (
        <>
            <label htmlFor="customRange3" className="form-label">{readableValue}</label>
            <input id={props.inputId} type="range" value={value} onChange={(e) => handleChange(e)} className="form-range" min={min1Seconds} max={max1Seconds} step="900" />
            <div className="valid-feedback">
                Vpořádku.
            </div>
            <div className="invalid-feedback">
                Prosím nastavte posuvník.
            </div>
        </>
    )
}

export default HourRangeInput;