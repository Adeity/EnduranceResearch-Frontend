export default function IdentifyingInput(props){
    let text;
    let instructionText;
    let identifierUpdateFunction;
    let textInputValue = props.researchNumber;
    let textInputPlaceholder;
    let textInputInvalidFeedback;
    let inputId = props.inputId;
    if (props.hasResearchNumber === 'true') {
        text = "Zadejte své výzkumné číslo."
        instructionText = "Je ve formátu šešti alfanumerických znaků oddělených podtržítkem. Např. A2C_3PY."
        identifierUpdateFunction = props.updateResearchNumber
        textInputValue = props.researchNumber
        textInputPlaceholder = "Zadejte své výzkumné číslo."
        textInputInvalidFeedback = `Zadaný vstup není ve správném formátu výzkumného čísla.`
    } else if (props.hasResearchNumber === 'false') {
        text = "Identifikujte se alternativním způsobem."
        instructionText = "Zadejte např. své jméno, nebo email. Pokud si přejete zůstat anonymní, zadejte vymyšlenou přezdívku."
        identifierUpdateFunction = props.updateAlternativeIdentifier
        textInputValue = props.alternativeIdentifier
        textInputPlaceholder = "Zadejte alternativní identifikátor."
        textInputInvalidFeedback = `Zadejte neprázdný vstup.`
    }
    const disabled = props.hasResearchNumber === null
    const a = disabled ? <h5 className={"placeholder no-circle w-100 mt-3"}>...</h5> : <h5 className={"mt-3"}>{text}</h5>
    const b = disabled ? <div className={"placeholder no-circle form-text w-100 mb-2"}>...</div> : <div className={"form-text mb-2"}>{instructionText}</div>
    return (
        <>
            <div className={"form-text pb-2"}>Vyberte jednu z možností.</div>
            {
                props.choices.map((choice, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                onChange={(e) => {
                                    props.update(e.target.value, choice.label, choice.id)
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
                onChange={(e) => identifierUpdateFunction(e.target.value)}
                type="text"
                disabled={disabled}
                className="form-control"
                value={textInputValue}
                placeholder={textInputPlaceholder}
                required={true}/>
            <div className="invalid-feedback">
                {textInputInvalidFeedback}
            </div>
        </>
    )
}
