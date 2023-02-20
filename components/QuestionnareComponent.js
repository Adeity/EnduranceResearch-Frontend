"use client"

import styles from './Form.module.css'
import React, {useRef} from 'react';
import MinutesInput from "./inputs/MinutesInput";
import MultipleChoiceInput from "./inputs/MultipleChoiceInput";
import MultipleChoiceInputWithText from "./inputs/MultipleChoiceInputWithText";
import HhMmInput from "./inputs/HhMmInput";
import {validate} from "./inputs/validator/validator"
import {removeAllValidityClasses} from "./inputs/validator/validClassToggler";
import {mapQuestionnareCodeToName} from "./questionsKeeper";
import IdentifyingInput from "./inputs/IdentifyingInput";
import {processQuestionnareData} from "./processor"

// function submitQuestionnare(questionnareMap) {
//     Object.keys(questionnareMap).forEach(e => {
//         processQuestionnareData(e)
//     })
//     console.log(questionnareMap)
// }

function QuestionnareComponent(props) {
    function decrementCurrentSlideNumber() {
        if (currentSlideGlobal.current > 0) {
            currentSlideGlobal.current--
        } else {
            return
        }
        const currentQuestionSetLength = getCurrentQuestionnareLength(questionnareMap)
        currentSlideLocal.current--
        if (currentSlideLocal.current < 0) {
            previousQuestionnare()
        } else {
            previousQuestion()
        }

    }

    function incrementCurrentSlideNumber() {
        const totalNumberOfQuestions = getTotalNumberOfQuestions()
        const currentQuestionnareLength = getCurrentQuestionnareLength(questionnareMap)
        if (currentSlideGlobal.current !== totalNumberOfQuestions - 1) {
            currentSlideGlobal.current++
        } else {
            return
        }
        currentSlideLocal.current++
        if (currentSlideLocal.current === currentQuestionnareLength) {
            nextQuestionnare()
        } else {
            nextQuestion()
        }
    }

    function nextQuestion() {
        const index = allQuestionsKeys.current.indexOf(currentQuestionKey)
        const newQuestionKey = allQuestionsKeys.current[index + 1];
        
        setCurrentQuestionKey(newQuestionKey)
    }

    function previousQuestion() {
        const index = allQuestionsKeys.current.indexOf(currentQuestionKey)
        const newQuestionKey = allQuestionsKeys.current[index - 1];

        setCurrentQuestionKey(newQuestionKey)
    }

    function nextQuestionnare() {
        currentSlideLocal.current = 0;
        const index = allQuestionnareKeys.current.indexOf(currentQuestionnareKey)
        const newQuestionnareKey = allQuestionnareKeys.current[index + 1]
        const newQuestionKey = Object.keys(questionnareMap[newQuestionnareKey])[0]
        
        allQuestionsKeys.current = Object.keys(questionnareMap[newQuestionnareKey])
        setCurrentQuestionnareKey(newQuestionnareKey)
        setCurrentQuestionKey(newQuestionKey)
    }

    function previousQuestionnare() {
        const index = allQuestionnareKeys.current.indexOf(currentQuestionnareKey)
        const newQuestionnareKey = allQuestionnareKeys.current[index - 1]
        currentSlideLocal.current = Object.keys(questionnareMap[newQuestionnareKey]).length - 1;
        const newQuestionKey = Object.keys(questionnareMap[newQuestionnareKey]).slice(-1)[0]
        allQuestionsKeys.current = Object.keys(questionnareMap[newQuestionnareKey])
        setCurrentQuestionKey(newQuestionKey)
        setCurrentQuestionnareKey(newQuestionnareKey)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!buttonIsEnabled.current) {
            return;
        }

        const currentQuestion = getCurrentQuestion(questionnareMap);

        // validation
        const isValid = validate(currentQuestion)
        if (!isValid) {
            return;
        }

        buttonIsEnabled.current = false;

        setTimeout(function () {
            removeAllValidityClasses(currentQuestion)
            incrementCurrentSlideNumber()
            buttonIsEnabled.current = true;
        }, 1000)
    }

    function previousSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion(questionnareMap))
        decrementCurrentSlideNumber()
    }

    function nextSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion(questionnareMap))
        incrementCurrentSlideNumber()
    }
    function updateAnswer(answer) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.answer = answer;
        setCurrentQuestionnareMap(newState)
    }

    function updateMultipleChoice(actualAnswerValue, actualAnswer, answerId) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.answers.forEach(e => {
            e.checked = e.id === answerId;
        })
        currentQuestion.answerValue = actualAnswerValue;
        currentQuestion.answerLabel = actualAnswer;
        setCurrentQuestionnareMap(newState)
    }

    function updateHasResearchNumber(hasResearchNumber) {
        removeAllValidityClasses(getCurrentQuestion(questionnareMap))
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.hasResearchNumber = hasResearchNumber
        setCurrentQuestionnareMap(newState)
    }

    function updateResearchNumber(researchNumber) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.researchNumberInput = researchNumber.toUpperCase()
        setCurrentQuestionnareMap(newState)
    }

    function updateAlternativeIdentifier(identifier) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.alternativeIdentifierInput = identifier
        setCurrentQuestionnareMap(newState)
    }

    function updateText(text) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.textValue = text;
        setCurrentQuestionnareMap(newState)
    }

    function getCurrentQuestion(questionnareMap) {
        return getCurrentQuestionnare(questionnareMap)[currentQuestionKey]
    }

    function getCurrentQuestionnare(questionnareMap) {
        return questionnareMap[currentQuestionnareKey]
    }

    function getCurrentQuestionnareLength(questionnareMap) {
        return Object.keys(getCurrentQuestionnare(questionnareMap)).length
    }

    function getTotalNumberOfQuestions() {
        return props.totalNumberOfQuestions;
    }

    function getCurrentInput() {
        const currentQuestion = getCurrentQuestion(questionnareMap);
        if (currentQuestion.questionType === "minutes") {
            return (
                <MinutesInput
                    inputId={currentQuestion.inputId}
                    value={currentQuestion.answer}
                    updateAnswer={updateAnswer}
                />)
        } else if (currentQuestion.questionType === "multipleChoice") {
            return (
                <MultipleChoiceInput
                    update={updateMultipleChoice}
                    choices={currentQuestion.answers}/>
            )
        } else if (currentQuestion.questionType === "multipleChoiceWithText") {
            return (
                <MultipleChoiceInputWithText
                    updateMultipleChoice={updateMultipleChoice}
                    updateText={updateText}
                    choices={currentQuestion.answers}
                    text={currentQuestion.textValue}
                    firstDescription={currentQuestion.firstDescription}
                    secondDescription={currentQuestion.secondDescription}
                    inputId={currentQuestion.inputId}
                />
            )
        } else if (currentQuestion.questionType === "hhmm") {
            return <HhMmInput
                updateAnswer={updateAnswer}
                value={currentQuestion.answer}
                inputId={currentQuestion.inputId}
            />
        } else if (currentQuestion.questionType === "identifying") {
            return <IdentifyingInput
                updateMultipleChoice={updateMultipleChoice}
                updateHasResearchNumber={updateHasResearchNumber}
                updateResearchNumber={updateResearchNumber}
                updateAlternativeIdentifier={updateAlternativeIdentifier}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
                choices={currentQuestion.answers}
                hasResearchNumber={currentQuestion.hasResearchNumber}
                researchNumber={currentQuestion.researchNumberInput}
                alternativeIdentifier={currentQuestion.alternativeIdentifierInput}
                researchNumberInputId={currentQuestion.researchNumberInputId}
                alternativeIdentifierInputId={currentQuestion.alternativeIdentifierInputId}
            />
        }
        return <div>no input</div>
    }

    const allQuestionnareKeys = useRef(Object.keys(props.questionnares))

    const [currentQuestionnareKey, setCurrentQuestionnareKey] = React.useState(allQuestionnareKeys.current[0])
    const allQuestionsKeys = useRef(Object.keys(props.questionnares[currentQuestionnareKey]))
    const [currentQuestionKey, setCurrentQuestionKey] = React.useState(allQuestionsKeys.current[0])

    // return

    const [questionnareMap, setCurrentQuestionnareMap] = React.useState(props.questionnares)

    // const [currentSlideGlobal, setCurrentSlideGlobal] = React.useState(0);
    const currentSlideGlobal = useRef(0);
    const currentSlideLocal = useRef(0)

    const buttonIsEnabled = useRef(true);
    const lastQuestion = currentSlideGlobal.current === props.totalNumberOfQuestions - 1

    const buttonText = lastQuestion ? "Dokončit" : "Další otázka"
    const buttonClass = lastQuestion ? "btn btn-secondary" : "btn btn-outline-secondary"


    let keysInfoText = []
    for (let i = 0; i < allQuestionnareKeys.current.length; i++){
        const e = allQuestionnareKeys.current[i];
        const length = Object.keys(questionnareMap[e]).length
        const comma = i === allQuestionnareKeys.current.length - 1 ? "" : ", "
        if (e === currentQuestionnareKey) {
            keysInfoText.push(<span key={i}><b>{mapQuestionnareCodeToName(e)} ({length} {getOtazekSklonovani(length)})</b>{comma}</span>)
        } else {
            keysInfoText.push(<span key={i}>{mapQuestionnareCodeToName(e)} ({length} {getOtazekSklonovani(length)}){comma}</span>)
        }
    }


    return (
            <form className={styles.customForm}>
                <small className={"pb-2"}>{keysInfoText}</small>
                <div id={"answerCard"} className={"card"}>
                    <div className={"card-header"}>
                        <div
                            className={"col-12 text-center"}>Otázka {currentSlideGlobal.current + 1} / {props.totalNumberOfQuestions}</div>
                    </div>
                    <div className={"card-body"}>
                        <h5>{getCurrentQuestion(questionnareMap).label}</h5>
                        <div id={"answer"} className="form-group">
                            {/*<label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>*/}
                            {getCurrentInput()}
                            <small id="emailHelp" className="form-text text-muted"></small>
                            <div id={"emptyForm"} className={"d-none"}>Vyplňte aspoň nečo</div>
                        </div>
                    </div>
                </div>
                <div id={"fillerDiv"}>
                </div>
                <div className={"pt-3"}>
                    <div className={"d-flex justify-content-center mt-auto"}>
                        <button className={"btn btn-outline-secondary me-3"}
                                onClick={(e) => previousSlide(e)}>{"<-"}</button>
                        <button className={buttonClass} onClick={(e) => handleSubmit(e)}>{buttonText}</button>
                        <button className={"btn btn-outline-secondary ms-3"}
                                onClick={(e) => nextSlide(e)}>{"->"}</button>
                    </div>
                    <div className={"row text-center mt-3"}>
                    </div>
                </div>
            </form>
    );
}

function getOtazekSklonovani(number) {
    if (number === 1) {
        return "otázka"
    } else if (number > 1 && number < 5) {
        return "otázky"
    } else {
        return "otázek"
    }
}

export default QuestionnareComponent