import Layout from "./layout";

import styles from '../pages/Form.module.css'
import React, {useRef} from 'react';
import MinutesInput from "./inputs/MinutesInput";
import MultipleChoiceInput from "./inputs/MultipleChoiceInput";
import MultipleChoiceInputWithText from "./inputs/MultipleChoiceInputWithText";
import HhMmInput from "./inputs/HhMmInput";
import {validate} from "./inputs/validator/validator"
import {removeAllValidityClasses} from "./inputs/validator/validClassToggler";
import TextInput from "./inputs/TextInput";
import {mapQuestionnareCodeToName} from "./questionsKeeper";

function QuestionnareComponent(props) {
    function decrementCurrentSlideNumber() {
        if (currentSlideNumber > 0) {
            setCurrentSlideNumber(currentSlideNumber - 1)
        }
    }

    function incrementCurrentSlideNumber() {
        if (currentSlideNumber !== getCurrentQuestionSetLength() - 1) {
            setCurrentSlideNumber(currentSlideNumber + 1)
        }
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
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideNumber]
        currentQuestion.actualAnswerValue = valueA;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionsMap(newState)
    }

    function updateMultipleChoice(actualAnswerValue, actualAnswer, answerId) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideNumber]
        currentQuestion.answers.forEach(e => {
            e.checked = e.id === answerId;
        })
        currentQuestion.actualAnswerValue = actualAnswerValue;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionsMap(newState)
    }

    function updateText(text) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideNumber]
        currentQuestion.textValue = text;
        setCurrentQuestionsMap(newState)
    }

    function getCurrentQuestion() {
        return getCurrentQuestionSet()[currentSlideNumber]
    }

    function getCurrentQuestionSet() {
        return questionsMap[currentQuestionKey]
    }

    function getCurrentQuestionSetLength() {
        return getCurrentQuestionSet().length
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
        } else if (currentQuestion.questionType === "idPrimary") {
            return <TextInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
            />
        } else if (currentQuestion.questionType === "idSecondary") {
            return <TextInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
            />
        }
        return <div>no input</div>
    }

    const allQuestionKeys = useRef(Object.keys(props.questions))
    const currentQuestionKeyIndex = useRef(0)
    const [currentQuestionKey, setCurrentQuestionKey] = React.useState(Object.keys(props.questions)[0])
    const [questionsMap, setCurrentQuestionsMap] = React.useState(props.questions)
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(0);
    const [formData, setFormData] = React.useState({});
    const buttonIsEnabled = useRef(true);
    const lastQuestion = currentSlideNumber === getCurrentQuestionSetLength() - 1
    const buttonText = lastQuestion ? "Dokončit" : "Další otázka"
    const buttonClass = lastQuestion ? "btn btn-secondary" : "btn btn-outline-secondary"

    function getOtazekSklonovani(number) {
        if (number === 1) {
            return "otázka"
        } else if (number > 1 && number < 5) {
            return "otázky"
        } else {
            return "otázek"
        }
    }

    let keysInfoText = []
    for (let i = 0; i < allQuestionKeys.current.length; i++){
        const e = allQuestionKeys.current[i];
        const comma = i === allQuestionKeys.current.length - 1 ? "" : ", "
        if (e === currentQuestionKey) {
            keysInfoText.push(<span><b>{mapQuestionnareCodeToName(e)} ({questionsMap[e].length} {getOtazekSklonovani(questionsMap[e].length)})</b>{comma}</span>)
        } else {
            keysInfoText.push(<span>{mapQuestionnareCodeToName(e)} ({questionsMap[e].length} {getOtazekSklonovani(questionsMap[e].length)}){comma}</span>)
        }
    }

    return (
        <Layout title={"PSQI"}>
            <form className={styles.customForm}>
                <span className={"pb-2"}>{keysInfoText}</span>
                <div id={"answerCard"} className={"card"}>
                    <div className={"card-header"}>
                        <div
                            className={"col-12 text-center"}>Otázka {currentSlideNumber + 1} / {getCurrentQuestionSetLength()}</div>
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
        </Layout>
    );
}

export default QuestionnareComponent