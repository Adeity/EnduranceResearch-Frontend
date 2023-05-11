import React from "react";

export default function HoursInput(props){
    return (
        <>
            <div className={"form-text pb-2"}>Zadejte kladné číslo znázorňující počet hodin.</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateAnswer(e.target.value)}
                type="number"
                className="form-control"
                value={props.value}
                data-test={"hours-input"}
                placeholder="Např.: 7.5" required={true}/>
            <div className="invalid-feedback" data-test={"invalid-feedback-text"}>
                Prosím zadejte číselnou hodnotu.
            </div>
        </>
    )
}
