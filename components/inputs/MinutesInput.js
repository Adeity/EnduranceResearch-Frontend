import React from "react";

export default function MinutesInput(props){
    return (
        <>
            <div className={"form-text pb-2"}>Zadejte celé číslo znázorňující počet minut.</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateValueAndActualAnswer(e.target.value, e.target.value)}
                type="number"
                className="form-control"
                value={props.value}
                placeholder="Zadejte počet minut" required={true}/>
            <div className="invalid-feedback">
                Prosím zadejte celočiselnou hodnotu.
            </div>
        </>
    )
}
