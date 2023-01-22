import React from "react";

export default function MultipleChoiceInput(props) {
    return (
        <>
            <div id={props.inputId} className={"form-text pb-2"}>Vyberte jednu z možností.</div>
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

export function validate(answer, answerValue) {
    return answer !== null && answerValue !== null;
}
