import React from "react";

export default function MinutesInput(props){
    function validate() {

    }
    return (
        <>
            <div className={"form-text pb-2"}>Zadejte celé číslo znázorňující počet minut.</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateValueAndActualAnswer(e.target.value, e.target.value)}
                type="number"
                className="form-control"
                placeholder="Enter minutes" min="0" step={1} required={true}/>
            <div className="invalid-feedback">
                Please choose a username.
            </div>
        </>
    )
}

export function validate(input) {
    // Convert the input to a number
    const number = Number(input);

    return typeof number === 'number' && number > 0;
}
