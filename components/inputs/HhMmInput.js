import React from "react";

export default function HhMmInput(props){
    return (
        <>
            <input
                id={props.inputId}
                onChange={(e) => props.updateValueAndActualAnswer(e.target.value, e.target.value)}
                type="text"
                className="form-control"
                placeholder="Zadejte hh:mm" required={true}/>
            <div className="invalid-feedback">
                Prosím napište hh:mm vstup.
            </div>
        </>
    )
}

export function validate(input) {

}
