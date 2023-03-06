"use client"
import {getJointQuestions} from "../../../components/questionsKeeper";
import QuestionnareComponent from "../../../components/QuestionnareComponent";

function Questionnare(props) {
    const questionnairesArray = props.searchParams.q
    const {totalNumberOfQuestions, valid, jointQuestions, error: errorMessage} = getJointQuestions(questionnairesArray)
    if (valid !== true) {
        return (
                <span className={"text-danger"}>{errorMessage}</span>
        )
    }

    return (
        <QuestionnareComponent
            questionnares={jointQuestions}
            totalNumberOfQuestions={totalNumberOfQuestions}/>
    )

}

export default Questionnare