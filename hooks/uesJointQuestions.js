import {useEffect, useState} from "react";
import {getJointQuestions} from "../components/questionsKeeper";

const useJointQuestions = (qParams) => {
    const [totalNumberOfQuestions, setTotalNumberOfQuestions] = useState()
    const [valid, setValid] = useState()
    const [jointQuestions, setJointQuestions] = useState()
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        const {totalNumberOfQuestions, valid, jointQuestions, error: errorMessage} = getJointQuestions(qParams)
        setTotalNumberOfQuestions(totalNumberOfQuestions)
        setValid(valid)
        setJointQuestions(jointQuestions)
        setErrorMessage(errorMessage)
    }, [])
    return {totalNumberOfQuestions, valid, jointQuestions, errorMessage}
}

export default useJointQuestions
