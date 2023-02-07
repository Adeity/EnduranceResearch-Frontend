import {useRouter} from "next/router";
import Link from "next/link";
import QuestionnaresList from "../components/QuestionnaresList";
import {getJointQuestions} from "../components/questionsKeeper";
import QuestionnareComponent from "../components/QuestionnareComponent";


function Questionnare(props) {
    const router = useRouter()
    const questionnairesArray = router.query.q
    const {totalNumberOfQuestions, valid, jointQuestions, error: errorMessage} = getJointQuestions(questionnairesArray)
    if (valid !== true) {
        return (
            <QuestionnaresList errorMessage={errorMessage}/>
        )
    }

    return (
        <QuestionnareComponent
            questions={jointQuestions}
            totalNumberOfQuestions={totalNumberOfQuestions}/>
        // <p>lol
        // </p>
    )

}

export default Questionnare