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
                placeholder="Např. pes" required={true}/>
            <h5 className={"pt-3"}>A jak často?</h5>
            <div className={"form-text pb-2"}>{props.secondDescription}</div>
            {
                props.choices.map((choice, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <label className="form-check-label" htmlFor={choice.id}>{choice.label}</label>
                            <input
                                className="form-check-input"
                                   onChange={(e) => props.update(e.target.value, choice.label, choice.id)}
                                   type="radio"
                                   name=""
                                   id={choice.id}
                                   value={choice.value}
                                   checked={choice.checked}
                            />
                        </div>
                    )
            })
        }
        </>
    )
}

export function validate(input) {

}
