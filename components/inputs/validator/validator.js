export default function validate(questionType, inputId) {
    if (questionType === 'minutes') {
        const isValid = validateMinutes();
        if (isValid === false) {
            document.getElementById(inputId).classList.add("is-invalid")
            return false;
        } else {
            document.getElementById(inputId).classList.remove("is-invalid")
            document.getElementById(inputId).classList.add("is-valid")
            return true;
        }
    } else if (currentQuestion.questionType === 'multipleChoice') {
        if(validateMultipleChoice() === false) {
            document.getElementById("emptyForm").classList.remove("d-none")
            return false;
        }
    }
}

function validateMinutes() {
    const answer = questions.questions[currentSlideNumber].actualAnswer
    // Convert the input to a number
    const number = Number(answer);

    if (typeof number === 'number' && number > 0) {
        return true;
    }
    return false;
}

function validateMultipleChoice() {

}
