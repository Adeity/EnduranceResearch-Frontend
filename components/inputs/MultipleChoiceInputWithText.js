import React from "react";

export default function MultipleChoiceInputWithText(props){
    return (
        <>
            <div className={"form-text pb-2"}>{props.firstDescription}</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateText(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Popište slovy" required={true}/>
            <div className="invalid-feedback">
                Prosím, vyplňte toto políčko.
            </div>
            <h5 className={""}>A jak často?</h5>
            <div className={"form-text pb-2"}>{props.secondDescription}</div>
            {
                props.choices.map((choice, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                   onChange={(e) => props.update(e.target.value, choice.label, choice.id)}
                                   type="radio"
                                   name=""
                                   id={choice.id}
                                   value={choice.value}
                                   checked={choice.checked}
                            />
                            <label className="form-check-label" htmlFor={choice.id}>{choice.label}</label>
                        </div>
                    )
            })
        }
        </>
    )
}

export function validate(input) {

}
