// import {useRouter} from "next/router";
import {getJointQuestions} from "../../components/questionsKeeper";
import QuestionnareComponent from "../../components/QuestionnareComponent";

function Questionnare(props) {
    const questionnairesArray = props.searchParams.q
    console.log(props)
    const {totalNumberOfQuestions, valid, jointQuestions, error: errorMessage} = getJointQuestions(questionnairesArray)
    if (valid !== true) {
        return (
                <span className={"text-danger"}>{errorMessage}</span>
            // <QuestionnaresList errorMessage={errorMessage}/>
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