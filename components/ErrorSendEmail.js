export default function ErrorSendEmail(props) {
    return (
        <>
            <h6>Nastala chyba. Můžete nám ji poslat email pavelpa2@fel.cvut.cz</h6>
            <form action="mailto:pavelpa2@fel.cvut.cz?subject=VO dotazníky chyba" method="post" encType="text/plain">
                <input className={"form-control form-control-danger text-danger"} type="text" name="Chybova_hlaska" value={props.errorMessage} />
                <input className={"btn btn-primary mt-3"} type="submit" value="Zaslat na email"/>
            </form>
        </>
)
}