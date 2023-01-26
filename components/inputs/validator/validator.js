import {toggleHhMm, toggleMinutes, toggleMultipleChoice, toggleMultipleChoiceWithText} from "./validClassToggler";

export function validate(question) {
    const questionType = question.questionType
    const inputId = question.inputId
    let isValid;
    switch (questionType) {
        case "minutes":
            isValid = validateMinutes(question.actualAnswer)
            toggleMinutes(isValid, inputId)
            break;
        case "hhmm":
            isValid = validateHhMm(question.actualAnswer)
            toggleHhMm(isValid, inputId)
            break;
        case "multipleChoice":
            isValid = validateMultipleChoice(question.actualAnswer, question.actualAnswerValue)
            toggleMultipleChoice(isValid, question.answers.map(e => e.id))
            break;
        case "multipleChoiceWithText":
            const text = validateMultipleChoiceWithTextText(question.textValue)
            const mChoice = validateMultipleChoiceWithTextMultipleChoice(question.actualAnswer, question.actualAnswerValue)
            isValid = text && mChoice
            toggleMultipleChoiceWithText(mChoice, text, question.answers.map(e => e.id), question.inputId)
            break;
    }
    return isValid;
}

function validateMinutes(answer) {
    // Convert the input to a number
    const number = Number(answer);

    if (typeof number === 'number' && number > 0) {
        return true;
    }
    return false;
}

function validateHhMm(answer) {
    if (answer === null) {
        return false;
    }
    const answerArray = answer.split(":")
    console.log(answerArray.length)
    if (answerArray.length !== 2) {
        return false;
    }
    const hh = answerArray[0]
    const mm = answerArray[1]

    const hhNumber = Number(hh);
    const hhValid = typeof hhNumber === 'number' && hhNumber >= 0 && hhNumber < 24;

    const mmNumber = Number(mm);
    const mmValid = typeof mmNumber === 'number' && mmNumber >= 0 && mmNumber < 60;

    return hhValid && mmValid
}

function validateMultipleChoice(actualAnswer, actualAnswerValue) {
    return actualAnswer !== "" && actualAnswerValue !== "";
}

function validateMultipleChoiceWithTextText(text) {
    return text.length > 0;
}

function validateMultipleChoiceWithTextMultipleChoice(actualAnswer, actualAnswerValue) {
    return actualAnswer !== "" && actualAnswerValue !== "";
}

function getValidityClassname(isValid) {
    if (isValid === true) {
        return "is-valid"
    } else if (isValid === false) {
        return "is-invalid"
    }
    return ""
}

