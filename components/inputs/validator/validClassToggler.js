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

function inputIdToggle(isValid, inputId) {
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
