"use client"
import QuestionnareComponent from "../../../components/QuestionnareComponent";
import useJointQuestions from "../../../hooks/uesJointQuestions";
import {useSearchParams} from "next/navigation";

function Questionnare(props) {
    const questionnairesArray = useSearchParams().getAll('q')
    const {totalNumberOfQuestions, valid, jointQuestions, errorMessage} = useJointQuestions(questionnairesArray)
    if (valid !== 'undefined' && valid !== true) {
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