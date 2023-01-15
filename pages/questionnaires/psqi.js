import Layout from "../../components/layout";

import styles from './Form.module.css'
import React from 'react';
import MinutesInput from "../../components/inputs/MinutesInput";
import MultipleChoiceInput from "../../components/inputs/MultipleChoiceInput";
import MultipleChoiceWithInput from "../../components/inputs/MultipleChoiceInputWithInput";
import HhMmInput from "../../components/inputs/HhMmInput";
import { validate } from "../../components/inputs/validator/validator"


function Psqi(props) {
    function updateValueAndActualAnswer(valueA, actualAnswer) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].actualAnswerValue = valueA;
        newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
        setQuestions(newState)
    }

    function getCurrentInput() {
        const currentQuestion = questions.questions[currentSlideNumber];
        if (currentQuestion.questionType === "minutes") {
            return (
                <MinutesInput
                    inputId={currentQuestion.inputId}/>)
        } else if (currentQuestion.questionType === "multipleChoice") {
            return (
                <MultipleChoiceInput
                    choices={currentQuestion.answers}/>
            )
        } else if (currentQuestion.questionType === "multipleChoiceWithNote") {
            return (
                <MultipleChoiceWithInput />
            )
        } else if (currentQuestion.questionType === "hhmm") {
            return <HhMmInput />
        }
        return <div>no input</div>
    }


    const questionsInit = {
        questions:
            [
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "What is the capital of France?",
                    code: "",
                    inputId: "capitalOfFrance",
                    answers: [
                        {
                            id: "cptl-Paris",
                            label: "Paris",
                            value: 1
                        },
                        {
                            id: "cptl-Prague",
                            label: "Prague",
                            value: 2
                        }
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "minutes",
                    inputType: "text",
                    label: "Jak dlouho (v minutách) vám obvykle každý večer během posledního měsíce trvalo než jste usnul(a)?",
                    code: "",
                    inputId: "asleepTimeMinutes",
                    answers: [],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "hhmm",
                    inputType: "text",
                    label: "V kolik hodin jste obvykle během posledního měsíce ráno vstával(a) z postele? (hh:mm)\n",
                    code: "",
                    inputId: "gmtHhmm",
                    answers: [
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "hhmm",
                    inputType: "text",
                    label: "(hh:mm) Kolik hodin za noc jste minulý měsíc obvykle opravdu spal(a)? (To se může lišit od počtu strávených v posteli.)",
                    code: "",
                    inputId: "hhMmTimeOfSleep",
                    answers: [
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Nemohl jste usnout do 30 min",
                    code: "",
                    inputId: "7psqi1",
                    answers: [
                        {
                            id: "never7psqi1",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi1",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi1",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi1",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Vzbudil(a) jste se uprostřed noci nebo brzy ráno.",
                    code: "",
                    inputId: "7psqi2",
                    answers: [
                        {
                            id: "never7psqi2",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi2",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi2",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi2",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Musel(a) jste vstávat a jít na záchod.",
                    code: "",
                    inputId: "7psqi3",
                    answers: [
                        {
                            id: "never7psqi3",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi3",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi3",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi3",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Nemohl(a) jste dobře dýchat.",
                    code: "",
                    inputId: "7psqi4",
                    answers: [
                        {
                            id: "never7psqi4",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi4",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi4",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi4",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Hlasitě jste kašlal(a) nebo chrápal(a).",
                    code: "",
                    inputId: "7psqi5",
                    answers: [
                        {
                            id: "never7psqi5",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi5",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi5",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi5",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Bylo Vám příliš chladno.",
                    code: "",
                    inputId: "7psqi6",
                    answers: [
                        {
                            id: "never7psqi6",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi6",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi6",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi6",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Bylo Vám příliš horko.",
                    code: "",
                    inputId: "7psqi7",
                    answers: [
                        {
                            id: "never7psqi7",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi7",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi7",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi7",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Mél jste špatné sny",
                    code: "",
                    inputId: "7psqi8",
                    answers: [
                        {
                            id: "never7psqi8",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi8",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi8",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi8",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Měl(a) jste bolesti.",
                    code: "",
                    inputId: "7psqi9",
                    answers: [
                        {
                            id: "never7psqi9",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi9",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi9",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi9",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
            ]
    }

    const [questions, setQuestions] = React.useState(questionsInit);
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(0);
    const [formData, setFormData] = React.useState({});

    function decrementCurrentSlideNumber() {
        if (currentSlideNumber > 0) {
            setCurrentSlideNumber(currentSlideNumber - 1)
        }
    }
    function incrementCurrentSlideNumber() {
        if (currentSlideNumber !== questions.questions.length - 1) {
            setCurrentSlideNumber(currentSlideNumber + 1)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        document.getElementById("emptyForm").classList.add("d-none")
        const currentQuestion = questions.questions[currentSlideNumber];

        // validation
        const isValid = validate()
        if (!isValid) {
            return;
        }

        setTimeout(function () {
            incrementCurrentSlideNumber()
        }, 1000);

        setFormData({
            ...formData,
            [currentQuestion.code]: currentQuestion.actualAnswer,
        });
    }

    function previousSlide(e) {
        e.preventDefault()
        decrementCurrentSlideNumber()
    }

    function nextSlide(e) {
        e.preventDefault()
        incrementCurrentSlideNumber()
    }


    const currentQuestion = questions.questions[currentSlideNumber];

    return (
        <Layout title={"psqi"}>
            <form className={styles.customForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>
                    {getCurrentInput()}
                    <small id="emailHelp" className="form-text text-muted"></small>
                    <div id={"emptyForm"} className={"d-none"}>Vyplňte aspoň nečo</div>
                </div>
                <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                <div className={"row text-center mt-3"}>
                    <div className={"col-12"}>Current
                        slide: {currentSlideNumber + 1} / {questions.questions.length}</div>
                    <button className={"btn btn-primary col-6"} onClick={(e) => previousSlide(e)}>{"<-"}</button>
                    <button className={"btn btn-primary col-6"} onClick={(e) => nextSlide(e)}>{"->"}</button>
                </div>
            </form>
        </Layout>
    );
}

export default Psqi