export default function TwoChoiceWithTextInput(props){
    let text;
    let instructionText;
    let optionTextUpdateFunction;
    let textInputValue = props.optionOneInput;
    let textInputPlaceholder;
    let textInputInvalidFeedback;
    let inputId = props.inputId;
    if (props.isOptionOne === 'true') {
        text = props.optionOneLabel
        instructionText = props.optionOneLabelHint
        optionTextUpdateFunction = props.updateOptionOne
        textInputValue = props.optionOneInput
        textInputPlaceholder = props.optionOnePlaceholder
        textInputInvalidFeedback = props.optionOneInvalidFeedback
    } else if (props.isOptionOne === 'false') {
        text = props.optionTwoLabel
        instructionText = props.optionTwoLabelHint
        optionTextUpdateFunction = props.updateOptionTwo
        textInputValue = props.optionTwoInput
        textInputPlaceholder = props.optionTwoPlaceholder
        textInputInvalidFeedback = props.optionTwoInvalidFeedback
    }
    const disabled = props.isOptionOne === null
    const a = disabled ? <h5 className={"placeholder no-circle w-100 mt-3"}>...</h5> : <h5 className={"mt-3"}>{text}</h5>
    const b = disabled ? <div className={"placeholder no-circle form-text w-100 mb-2"}>...</div> : <div className={"form-text mb-2"}>{instructionText}</div>
    return (
        <>
            <div
                className={"form-text pb-2"}>Vyberte jednu z možností.</div>
            {
                props.choices.map((choice, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                onChange={(e) => {
                                    props.updateMultipleChoice(e.target.value, choice.label, choice.id)
                                    props.updateHasResearchNumber(e.target.value)
                                }}
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
            {a}
            {b}
            <input
                id={inputId}
                onChange={(e) => optionTextUpdateFunction(e.target.value, props.upperCase)}
                type="text"
                disabled={disabled}
                className="form-control"
                data-test={"twochoice-text"}
                value={textInputValue}
                placeholder={textInputPlaceholder}
                required={true}/>
            <div className="invalid-feedback" data-test={"invalid-feedback-text"}>
                {textInputInvalidFeedback}
            </div>
        </>
    )
}
