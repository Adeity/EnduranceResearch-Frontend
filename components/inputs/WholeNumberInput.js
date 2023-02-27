export default function WholeNumberInput(props){
    return (
        <>
            <div className={"form-text pb-2"}>{props.description}</div>
            <input
                id={props.inputId}
                onChange={(e) => props.updateAnswer(e.target.value)}
                type="number"
                className="form-control"
                value={props.value}
                placeholder={props.placeholder} required={true}/>
            <div className="invalid-feedback">
                Prosím zadejte celočiselnou hodnotu.
            </div>
        </>
    )
}
