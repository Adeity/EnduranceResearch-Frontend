export function validate(question) {
    const questionType = question.questionType
    const inputId = question.inputId
    debugger
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
    } else if (questionType === 'multipleChoice') {
        debugger
        if (validateMultipleChoice(question.actualAnswer, question.actualAnswerValue) === false) {
            // document.getElementById("emptyForm").classList.remove("d-none")
            question.answers.forEach(e=> {
                document.getElementById(e.id).classList.add("is-invalid")
            })
            return false;
        }
        question.answers.forEach(e => {
            document.getElementById(e.id).classList.remove("is-invalid")
            document.getElementById(e.id).classList.add("is-valid")
        })
        return true;
    } else if (questionType === 'multipleChoiceWithText') {
        const text = validateMultipleChoiceWithTextText(question.textValue)
        const mChoice = validateMultipleChoiceWithTextMultipleChoice(question.actualAnswer, question.actualAnswerValue)
        const both = text && mChoice

        if (text === false) {
            document.getElementById(inputId).classList.add("is-invalid")
        } else {
            document.getElementById(inputId).classList.remove("is-invalid")
            document.getElementById(inputId).classList.add("is-valid")
        }
        if (mChoice === false) {
            question.answers.forEach(e=> {
                document.getElementById(e.id).classList.add("is-invalid")
            })
        } else {
            question.answers.forEach(e=> {
                document.getElementById(e.id).classList.remove("is-invalid")
                document.getElementById(e.id).classList.add("is-valid")
            })

        }
        return both
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

