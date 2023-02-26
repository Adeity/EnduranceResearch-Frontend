export function toggleHhMm(isValid, inputId) {
    inputIdToggle(isValid, inputId)
}

export function toggleMinutes(isValid, inputId) {
    inputIdToggle(isValid, inputId);
}

export function toggleMultipleChoice(isValid, answersIds) {
    mChoiceToggle(isValid, answersIds)
}

export function toggleMultipleChoiceWithText(isMChoiceValid, isTextValid, answersIds, textId) {
    mChoiceToggle(isMChoiceValid, answersIds);
    inputIdToggle(isTextValid, textId)
}

export function inputIdToggle(isValid, inputId) {
    if (isValid === false) {
        document.getElementById(inputId).classList.add("is-invalid")
    } else {
        document.getElementById(inputId).classList.remove("is-invalid")
        document.getElementById(inputId).classList.add("is-valid")
    }
}

function mChoiceToggle(isValid, answersIds) {
    if (isValid === false) {
        answersIds.forEach(id => {
            document.getElementById(id).classList.add("is-invalid")
        })
    } else {
        answersIds.forEach(id => {
            document.getElementById(id).classList.remove("is-invalid")
            document.getElementById(id).classList.add("is-valid")
        })
    }
}

export function removeAllValidityClasses(currentQuestion) {
    const questionType = currentQuestion.questionType
    switch (questionType) {
        case "hourRangeInput":
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
            break;
        case "hours":
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
            break;
        case "minutes":
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
            break;
        case "hhmm":
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
            break;
        case "multipleChoice":
            currentQuestion.answers.forEach(e => {
                document.getElementById(e.id).classList.remove("is-valid")
                document.getElementById(e.id).classList.remove("is-invalid")
            })
            break;
        case "dzsYesNoSkip":
            currentQuestion.answers.forEach(e => {
                document.getElementById(e.id).classList.remove("is-valid")
                document.getElementById(e.id).classList.remove("is-invalid")
            })
            break;
        case "multipleChoiceWithText":
            currentQuestion.answers.forEach(e => {
                document.getElementById(e.id).classList.remove("is-valid")
                document.getElementById(e.id).classList.remove("is-invalid")
            })
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
            break;
        case "identifying":
            currentQuestion.answers.forEach(e => {
                document.getElementById(e.id).classList.remove("is-valid")
                document.getElementById(e.id).classList.remove("is-invalid")
            })
            document.getElementById(currentQuestion.inputId).classList.remove("is-valid")
            document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
    }
}
