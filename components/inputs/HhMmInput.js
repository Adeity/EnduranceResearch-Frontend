import React from "react";

export default function HhMmInput(props){
    return (
        <>
            <div className={"form-text pb-2"}>Zadejte čas ve formátu HH:MM. Použijte 24 hodinový formát času.</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateAnswer(e.target.value)}
                type="text"
                className="form-control"
                value={props.value}
                placeholder="Zadejte hh:mm" required={true}/>
            <div className="invalid-feedback">
                Prosím napište hh:mm vstup.
            </div>
        </>
    )
}