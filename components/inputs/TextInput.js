import React from "react";

export default function TextInput(props){
    return (
        <>
            <div className={"form-text pb-2"}>{props.instruction}</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateValueAndActualAnswer(e.target.value, e.target.value)}
                type="text"
                className="form-control"
                value={props.value}
                data-test={"text-input"}
                placeholder="Enter minutes" required={true}/>
            <div className="invalid-feedback" data-test={"invalid-feedback-text"}>

            </div>
        </>
    )
}
