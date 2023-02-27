export function processQuestionnareData(questionnareType, questionnareData) {
    const res = {
        answers: [],
        computationVariables: {}
    }
    function getVerbalAnwer(u) { // premenit undefined
        switch (u.questionType) {
            case "twoChoiceWithText":
                return `${u.answerLabel}|${u.optionOneInput}|${u.optionTwoInput}`
            case "multipleChoice":
                return u.answerLabel
            case "multipleChoiceWithText":
                return `${u.answerLabel}|${u.textValue}`
            case "identifying":
                return `${u.hasResearchNumber}|${u.researchNumberInput}|${u.alternativeIdentifierInput}`
            default:
                return u.answer
        }
    }
    Object.entries(questionnareData).forEach(([key, value]) => {
        res.computationVariables[key] = value.answer
        res.answers.push(
            {
                question: value.question,
                answer: getVerbalAnwer(value)
            }
        )
    })
    return res
}

function processPsqiData(questionnareData) {
    const res = {}
    res['q1'] = questionnareData.q1.answer
    res['q2'] = questionnareData.q2.answer
    res['q3'] = questionnareData.q3.answer
    res['q4'] = questionnareData.q4.answer
    res['q5a'] = questionnareData.q5a.answerValue
    res['q5b'] = questionnareData.q5b.answer
    res['q5c'] = questionnareData.q5c.answerValue
    res['q5d'] = questionnareData.q5d.answerValue
    res['q5e'] = questionnareData.q5e.answerValue
    res['q5f'] = questionnareData.q5f.answerValue
    res['q5i'] = questionnareData.q5i.answerValue
    res['q5j'] = questionnareData.q5j.answerValue
    res['q6'] = questionnareData.q6.answerValue
    res['q7'] = questionnareData.q7.answerValue
    res['q8'] = questionnareData.q8.answerValue
    res['q9'] = questionnareData.q9.answerValue
    res['q10'] = questionnareData.q10.answerValue
    res['workDaysGmt'] = questionnareData.workDaysGmt.answer
    res['workDaysGnt'] = questionnareData.workDaysGnt.answer
    res['freeDaysGmt'] = questionnareData.freeDaysGmt.answer
    res['freeDaysGnt'] = questionnareData.freeDaysGnt.answer
    return null
}
function processMeqData() {

}
function processMctqData() {

}
function processIdData() {

}
function processDemoData() {

}
