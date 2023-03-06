export default function SubmitErrorPage(props) {
    const questionnairesArray = props.searchParams.message
    return (
        <>
            <h3>Nastala chyba. Dejte nám o ní vědět na pavelpa2@fel.cvut.cz</h3>
            <p className={"text-danger"}>{questionnairesArray}</p>
        </>
    )
}