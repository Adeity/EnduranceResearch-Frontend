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
import TwoChoiceWithTextInput from "./inputs/TwoChoiceWithTextInput";
import {processQuestionnareData} from "./dataProcessor/processor"
import HoursInput from "./inputs/HoursInput";
import HourRangeInput from "./inputs/HourRangeInput";
import WholeNumberInput from "./inputs/WholeNumberInput";
import ErrorSendEmail from "./ErrorSendEmail";
import MyRecaptcha from "./MyRecaptcha";

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function createPayload(questionnareMap) {
    const res = {}
    Object.entries(questionnareMap).forEach(([key, value]) => {
        res[key] = processQuestionnareData(key, value)
    })
    res['identifying'] = {}
    res['identifying'].hasResearchNumber = questionnareMap.id.id.isOptionOne
    res['identifying'].researchNumber = questionnareMap.id.id.optionOneInput
    res['identifying'].alternativeIdentifier = questionnareMap.id.id.optionTwoInput
    return res
}

function QuestionnareComponent(props) {
    function decrementCurrentSlideNumber() {
        if (currentSlideGlobal.current > 0) {
            currentSlideGlobal.current--
        } else {
            return
        }
        currentSlideLocal.current--
        if (currentSlideLocal.current < 0) {
            previousQuestionnare()
        } else {
            previousQuestion()
        }

    }

    function incrementYesNoSkip(answer) {
        if (answer === "true") {
            incrementCurrentSlideNumber();
        } else {
            currentSlideGlobal.current += 8
            currentSlideLocal.current += 8

            const index = allQuestionsKeys.current.indexOf(currentQuestionKey)
            const newQuestionKey = allQuestionsKeys.current[index + 8];

            setCurrentQuestionKey(newQuestionKey)
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

    function submitE(e) {
        e.preventDefault()
        submit()
    }

    function submit() {
        if (lastQuestion && !finishButtonEnabled) {
            return
        }
        const payload = createPayload(questionnareMap)
        postData(process.env.NEXT_PUBLIC_BASE_URL + "/form-submit", payload).then((data) => {
            if (data === 1) {
                console.log("ok")
                setTimeout(function () {
                    window.location.href = '/thankyou'
                }, 1000)
            } else {
                const s = JSON.stringify(data)
                setError(s)
            }
        }).catch(e => {
            setError("Server je nedostupný.")
        })
    }

    function handleNextButtonClick(event) {
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
        if (currentSlideGlobal.current === props.totalNumberOfQuestions - 1) {
            submit()
            buttonIsEnabled.current = true;
        } else {
            setTimeout(function () {
                removeAllValidityClasses(currentQuestion)
                if (currentQuestion.questionType === "dzsYesNoSkip") {
                    incrementYesNoSkip(currentQuestion.answer)
                } else {
                    incrementCurrentSlideNumber()
                }
                buttonIsEnabled.current = true;
            }, 1000)
        }
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

    function updateMultipleChoice(actualanswer, actualAnswer, answerId) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.answers.forEach(e => {
            e.checked = e.id === answerId;
        })
        currentQuestion.answer = actualanswer;
        currentQuestion.answerLabel = actualAnswer;
        setCurrentQuestionnareMap(newState)
    }

    function updateIsOptionOne(optionOne) {
        removeAllValidityClasses(getCurrentQuestion(questionnareMap))
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.isOptionOne = optionOne
        setCurrentQuestionnareMap(newState)
    }

    function updateOptionOneInput(optionOne, upperCase) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        if (upperCase) {
            currentQuestion.optionOneInput = optionOne.toUpperCase()
        } else {
            currentQuestion.optionOneInput = optionOne
        }
        setCurrentQuestionnareMap(newState)
    }

    function updateOptionTwoInput(optionTwo) {
        const newState = {...questionnareMap}
        const currentQuestion = getCurrentQuestion(newState)
        currentQuestion.optionTwoInput = optionTwo
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
        } else if (currentQuestion.questionType === "multipleChoice" || currentQuestion.questionType === "dzsYesNoSkip") {
            return (
                <MultipleChoiceInput
                    update={updateMultipleChoice}
                    additionalDescription={currentQuestion.additionalDescription}
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
        } else if (currentQuestion.questionType === "twoChoiceWithText") {
            return <TwoChoiceWithTextInput
                updateMultipleChoice={updateMultipleChoice}
                updateHasResearchNumber={updateIsOptionOne}
                updateOptionOne={updateOptionOneInput}
                updateOptionTwo={updateOptionTwoInput}
                upperCase={currentQuestion.optionOneUppercase}
                inputId={currentQuestion.inputId}
                choices={currentQuestion.answers}
                isOptionOne={currentQuestion.isOptionOne}
                optionOneInput={currentQuestion.optionOneInput}
                optionTwoInput={currentQuestion.optionTwoInput}
                optionOneLabel={currentQuestion.optionOneLabel}
                optionOneLabelHint={currentQuestion.optionOneLabelHint}
                optionOnePlaceholder={currentQuestion.optionOnePlaceholder}
                optionTwoLabel={currentQuestion.optionTwoLabel}
                optionTwoLabelHint={currentQuestion.optionTwoLabelHint}
                optionTwoPlaceholder={currentQuestion.optionTwoPlaceholder}
                optionOneInvalidFeedback={currentQuestion.optionOneInvalidFeedback}
                optionTwoInvalidFeedback={currentQuestion.optionTwoInvalidFeedback}
            />
        } else if (currentQuestion.questionType === "hours") {
            return <HoursInput
                inputId={currentQuestion.inputId}
                value={currentQuestion.answer}
                updateAnswer={updateAnswer}/>
        } else if (currentQuestion.questionType === "hourRangeInput") {
            return <HourRangeInput
                min={currentQuestion.minHour}
                totalHours={currentQuestion.numberOfHours}
                inputId={currentQuestion.inputId}
                value={currentQuestion.answer}
                update={updateAnswer}/>
        } else if (currentQuestion.questionType === "wholeNumber") {
            return <WholeNumberInput
                inputId={currentQuestion.inputId}
                value={currentQuestion.answer}
                updateAnswer={updateAnswer}
                description={currentQuestion.description}
                placeholder={currentQuestion.placeholder}/>
        }
        return <div>no input</div>
    }

    function enableFinishButton() {
        setFininshButtonEnabled(true)
    }

    const allQuestionnareKeys = useRef(Object.keys(props.questionnares))


    const [finishButtonEnabled, setFininshButtonEnabled] = React.useState(true)
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

    const [error, setError] = React.useState(null)
    if (error !== null) {
        return <ErrorSendEmail errorMessage={error}/>
    }

    let keysInfoText = []
    for (let i = 0; i < allQuestionnareKeys.current.length; i++) {
        const e = allQuestionnareKeys.current[i];
        const length = Object.keys(questionnareMap[e]).length
        const comma = i === allQuestionnareKeys.current.length - 1 ? "" : ", "
        if (e === currentQuestionnareKey) {
            keysInfoText.push(<span
                key={i}><b>{mapQuestionnareCodeToName(e)} ({length} {getOtazekSklonovani(length)})</b>{comma}</span>)
        } else {
            keysInfoText.push(<span
                key={i}>{mapQuestionnareCodeToName(e)} ({length} {getOtazekSklonovani(length)}){comma}</span>)
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
                <p id={"submitError"} className={"text-danger"}></p>
                <MyRecaptcha show={!finishButtonEnabled && lastQuestion} enableFinishButton={enableFinishButton}/>
                <div className={"d-flex justify-content-center mt-auto"}>
                    {/*<button className={"btn btn-outline-secondary me-3"}*/}
                    {/*        onClick={(e) => previousSlide(e)}>{"<-"}</button>*/}
                    <button disabled={!finishButtonEnabled && lastQuestion} className={buttonClass} onClick={(e) => handleNextButtonClick(e)}>{buttonText}</button>
                    {/*<button className={buttonClass} onClick={(e) => submitE(e)}>Odeslat</button>*/}
                    {/*<button className={"btn btn-outline-secondary ms-3"}*/}
                    {/*        onClick={(e) => nextSlide(e)}>{"->"}</button>*/}
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