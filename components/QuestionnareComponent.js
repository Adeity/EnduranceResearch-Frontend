"use client"

import styles from '../pages/Form.module.css'
import React, {useRef} from 'react';
import MinutesInput from "./inputs/MinutesInput";
import MultipleChoiceInput from "./inputs/MultipleChoiceInput";
import MultipleChoiceInputWithText from "./inputs/MultipleChoiceInputWithText";
import HhMmInput from "./inputs/HhMmInput";
import {validate} from "./inputs/validator/validator"
import {removeAllValidityClasses} from "./inputs/validator/validClassToggler";
import {mapQuestionnareCodeToName} from "./questionsKeeper";
import IdentifyingInput from "./inputs/IdentifyingInput";

function QuestionnareComponent(props) {
    function decrementCurrentSlideNumber() {
        if (currentSlideGlobal.current > 0) {
            currentSlideGlobal.current--
        } else {
            return
        }
        const currentQuestionSetLength = getCurrentQuestionnareLength()
        currentSlideLocal.current--
        if (currentSlideLocal.current < 0) {
            previousQuestionnare()
        }

    }

    function incrementCurrentSlideNumber() {
        const totalNumberOfQuestions = getTotalNumberOfQuestions()
        const currentQuestionnareLength = getCurrentQuestionnareLength()
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
        const newQuestionKey = allQuestionnareKeys.current[index - 1]
        currentSlideLocal.current = questionnareMap[newQuestionKey].length - 1;
        setCurrentQuestionnareKey(newQuestionKey)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!buttonIsEnabled.current) {
            return;
        }

        const currentQuestion = getCurrentQuestion();

        // validation
        const isValid = validate(currentQuestion)
        if (!isValid) {
            return;
        }

        setFormData({
            ...formData,
            [currentQuestion.code]: currentQuestion.actualAnswer
        });

        buttonIsEnabled.current = false;

        setTimeout(function () {
            removeAllValidityClasses(currentQuestion)
            incrementCurrentSlideNumber()
            buttonIsEnabled.current = true;
        }, 1000)
    }

    function previousSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion())
        decrementCurrentSlideNumber()
    }

    function nextSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion())
        incrementCurrentSlideNumber()
    }
    function updateValueAndActualAnswer(valueA, actualAnswer) {
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.actualAnswerValue = valueA;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionnareMap(newState)
    }

    function updateMultipleChoice(actualAnswerValue, actualAnswer, answerId) {
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.answers.forEach(e => {
            e.checked = e.id === answerId;
        })
        currentQuestion.actualAnswerValue = actualAnswerValue;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionnareMap(newState)
    }

    function updateHasResearchNumber(hasResearchNumber) {
        removeAllValidityClasses(getCurrentQuestion())
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.hasResearchNumber = hasResearchNumber
        setCurrentQuestionnareMap(newState)
    }

    function updateResearchNumber(researchNumber) {
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.researchNumberInput = researchNumber.toUpperCase()
        setCurrentQuestionnareMap(newState)
    }

    function updateAlternativeIdentifier(identifier) {
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.alternativeIdentifierInput = identifier
        setCurrentQuestionnareMap(newState)
    }

    function updateText(text) {
        const newState = {...questionnareMap}
        const currentQuestion = newState[currentQuestionnareKey][currentSlideLocal.current]
        currentQuestion.textValue = text;
        setCurrentQuestionnareMap(newState)
    }

    function getCurrentQuestion() {
        
        
        return getCurrentQuestionnare()[currentQuestionKey]
    }

    function getCurrentQuestionnare() {
        return questionnareMap[currentQuestionnareKey]
    }

    function getCurrentQuestionnareLength() {
        return Object.keys(getCurrentQuestionnare()).length
    }

    function getTotalNumberOfQuestions() {
        return props.totalNumberOfQuestions;
    }

    function getCurrentInput() {
        const currentQuestion = getCurrentQuestion();
        if (currentQuestion.questionType === "minutes") {
            return (
                <MinutesInput
                    inputId={currentQuestion.inputId}
                    value={currentQuestion.actualAnswerValue}
                    updateValueAndActualAnswer={updateValueAndActualAnswer}
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
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
            />
        } else if (currentQuestion.questionType === "identifying") {
            return <IdentifyingInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                update={updateMultipleChoice}
                updateHasResearchNumber={updateHasResearchNumber}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
                choices={currentQuestion.answers}
                hasResearchNumber={currentQuestion.hasResearchNumber}
                updateResearchNumber={updateResearchNumber}
                updateAlternativeIdentifier={updateAlternativeIdentifier}
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

    const [formData, setFormData] = React.useState({});

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
                        <h5>{getCurrentQuestion().label}</h5>
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

function getOtazekSklonovani(number) { // TODO: nebuď prase a přesuň to na nějaký hezčí místo lul.
    if (number === 1) { // pokud je číslo jedna
        return "otázka" // tento řádek vrací otázka string
    } else if (number > 1 && number < 5) { // pokud je číslo větší než 1 a menší než 5
        return "otázky" // tento řádek vrací otázky string
    } else { // jinak
        return "otázek" // tento řádek vrací otázek string
    }
}

export default QuestionnareComponent