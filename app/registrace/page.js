"use client"
import {useState} from "react";
import {postData} from "../../components/QuestionnareComponent";

export default function App() {
    const [researchNumberInput, setResearchNumberInput] = useState("")
    const [researchNumberInvalidFeedback, setResearchNumberInvalidFeedback] = useState(false)
    const [researchNumberInvalidFeedbackText, setResearchNumberInvalidFeedbackText] = useState("")

    function checkValidReseachNumber(researchNumber) {
        return /^[A-Z0-9]{3}_[a-zA-Z0-9]{3}$/.test(researchNumber)
    }

    function handleResearchNumberChange(e) {
        setResearchNumberInput(e.target.value.toUpperCase())
    }

    function handleSubmitButtonClick() {
        console.log("handle submit")
        setResearchNumberInvalidFeedback(false)
        setResearchNumberInvalidFeedbackText("")
        const validInput = checkValidReseachNumber(researchNumberInput)
        console.log("valid input", validInput)
        if (!validInput) {
            setResearchNumberInvalidFeedback(true)
            setResearchNumberInvalidFeedbackText("Výzkumné číslo musí být ve formátu šesti alfanumerických znaků oddělených podtržítkem. Např. AB3_C3A.")
            return;
        }

        const url = process.env.BASE_URL + "/garmin/authorize?device_id=" + researchNumberInput
        fetch(url, {
            method: "GET",
            mode: "no-cors"
        }).then(response => response.json())
            .then((data) => {
                if (data.redirectUrl === undefined) {
                    researchNumberInvalidFeedback(true)
                    researchNumberInvalidFeedbackText(data.message)
                    return;
                }
                window.location.replace(data.redirectUrl)
            })
    }

    return (
        <main className="container ">
            <h4>Registrace Garmin Zařízení</h4>
            <p>Abychom mohli začít sbírat data z vaší nositelné elektroniky, je potřeba udělit
                souhlas se sdílením dat.
                A jak na to?
                Stačí vyplnit a odeslat výzkumné číslo, které Vám bylo přiděleno.</p>

            <div className="d-flex justify-content-center">
                <form id="research_number_form" className="form-control" onSubmit="return false;">
                    <label htmlFor="researchNumber">Zadejte své výzkumné číslo.</label>
                    <div id="emailHelp" className="form-text">Výzkumné číslo se skládá ze šešti
                        alfanumerickych znaků oddělených podtržítkem.
                    </div>
                    <input id="researchNumber" placeholder="Např. AB3_C3A" type="text" className="form-control my-2" value={researchNumberInput} onChange={(e) => handleResearchNumberChange(e)}/>
                    <div id="researchNumberInvalidFeedback" className="invalid-feedback">

                    </div>
                    <div className="d-flex justify-content-center pt-2">
                        <input id="submitButton" type="button" className="btn btn-primary ms-auto me-auto"
                               value="Odeslat" onClick={handleSubmitButtonClick}/>
                    </div>
                </form>
            </div>
            <p className="pt-3">Po odeslání budete přesměrováni na stránku
                Garmin Connect a bude nutné vyplnit přihlašovací údaje k Vašemu Garmin účtu. Po správném zadání
                přihlašovacích údajů, je třeba udělit samotný souhlas. V prvním kroku volíte, která data chcete sdílet.
                Prosíme nechte vše zaškrtnuté a uložte Vaši volbu kliknutím na tlačítko SAVE. Ve druhém kroku potvrďte
                Váš souhlas se sdílením dat kliknutím na tlačítko AGREE.</p>

            <p>Pokud vše proběhne, jak má, budete přesměrování na stránku s poděkováním.</p>

            <div id="instructions">
                <img id="Garmin_instructions1"
                     src="images/navod1.png"
                     className="rounded"
                     alt="Garmin registration instructions"/>
                <img id="Garmin_instructions2"
                     src="images/navod2.png"
                     className="rounded"
                     alt="Garmin registration instructions"
                />
                <img id="Garmin_instructions3"
                     src="images/navod3.png"
                     className="rounded"
                     alt="Garmin registration instructions"/>
            </div>
        </main>
    )

}