export function validate(question) {
    const questionType = question.questionType
    const inputId = question.inputId
    if (questionType === 'minutes' || questionType === "hhmm") {
        let isValid;
        if (questionType ==='minutes') {
            isValid = validateMinutes(question.actualAnswer)
        }
        else if (questionType === "hhmm") {
            isValid = validateHhMm(question.actualAnswer)
        }
        if (isValid === false) {
            document.getElementById(inputId).classList.add("is-invalid")
            return false;
        } else {
            document.getElementById(inputId).classList.remove("is-invalid")
            document.getElementById(inputId).classList.add("is-valid")
            return true;
        }
    } else if (currentQuestion.questionType === 'multipleChoice') {
        if (validateMultipleChoice() === false) {
            document.getElementById("emptyForm").classList.remove("d-none")
            return false;
        }
    } else if (currentQuestion.questionType === 'multipleChoiceWithText') {
        if (validateMultipleChoiceWithText() === false) {
            document.getElementById("emptyForm").classList.remove("d-none")
            return false;
        }
    }
    return false;
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

function validateMultipleChoice() {
    return true;
}

function validateMultipleChoiceWithText() {
    return true;
}

function getValidityClassname(isValid) {
    if (isValid === true) {
        return "is-valid"
    } else if (isValid === false) {
        return "is-invalid"
    }
    return ""
}

