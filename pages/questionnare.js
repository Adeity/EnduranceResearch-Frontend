import {useRouter} from "next/router";
import Link from "next/link";
import QuestionnaresList from "../components/QuestionnaresList";
import {getJointQuestions} from "../components/questionsKeeper";
import QuestionnareComponent from "../components/questionnareComponent";


function Questionnare(props) {
    const router = useRouter()
    const questionnairesArray = router.query.q
    const {valid, jointQuestions, error: errorMessage} = getJointQuestions(questionnairesArray)
    console.log("valid: ", valid, "jointQs: ", jointQuestions, "errorMessage: ", errorMessage)
    if (valid !== true) {
        return (
            <QuestionnaresList errorMessage={errorMessage}/>
        )
    }

    console.log("joint questions: ", jointQuestions)

    return (
        <QuestionnareComponent
        questions = {jointQuestions}/>
        // <p>lol
        // </p>
    )

}

export default Questionnare