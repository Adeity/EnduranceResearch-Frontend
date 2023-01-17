import Layout from "../../components/layout";

import styles from './Form.module.css'
import React from 'react';
import MinutesInput from "../../components/inputs/MinutesInput";
import MultipleChoiceInput from "../../components/inputs/MultipleChoiceInput";
import MultipleChoiceInputWithText from "../../components/inputs/MultipleChoiceInputWithText";
import HhMmInput from "../../components/inputs/HhMmInput";
import { validate } from "../../components/inputs/validator/validator"
import MyForm from "../../components/MyForm"

function Psqi(props) {
    function updateValueAndActualAnswer(valueA, actualAnswer) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].actualAnswerValue = valueA;
        newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
        setQuestions(newState)
    }

    function updateMultipleChoice(actualAnswerValue, actualAnswer, answerId) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].answers.forEach(e=>{
            e.checked = e.id === answerId;
        })
        newState.questions[currentSlideNumber].actualAnswerValue = actualAnswerValue;
        newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
        setQuestions(newState)
        // newState.questions[currentSlideNumber].actualAnswerValue = valueA;
        // newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
    }

    function updateMultipleChoiceWithText(multipleChoiceValue, multipleChoiceActualAnswer, multipleChoiceId, text) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].answers.forEach(e=>{
            e.checked = e.id === answerId;
        })
        newState.questions[currentSlideNumber].actualAnswerValue = actualAnswerValue;
        newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
        newState.questions[currentSlideNumber].textValue = text;
        setQuestions(newState)
    }

    function updateText(text) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].textValue = text;
        setQuestions(newState)
    }

    function getCurrentInput() {
        const currentQuestion = questions.questions[currentSlideNumber];
        if (currentQuestion.questionType === "minutes") {
            return (
                <MinutesInput
                    inputId={currentQuestion.inputId}
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
                    update={updateMultipleChoice}
                    updateText={updateText}
                    choices={currentQuestion.answers}
                    text={currentQuestion.textValue}
                    firstDescription={currentQuestion.firstDescription}
                    secondDescription={currentQuestion.secondDescription}
                />
            )
        } else if (currentQuestion.questionType === "hhmm") {
            return <HhMmInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
            />
        }
    return <div>no input</div>
    }

    const inTheLastString = "Jak často: "
    const questionsInit = {
        questions:
            [
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
                    label: inTheLastString + "Nemohl jste usnout do 30 min",
                    code: "",
                    inputId: "7psqi1",
                    answers: [
                        {
                            id: "never7psqi1",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi1",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi1",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi1",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Vzbudil(a) jste se uprostřed noci nebo brzy ráno.",
                    code: "",
                    inputId: "7psqi2",
                    answers: [
                        {
                            id: "never7psqi2",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi2",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi2",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi2",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Musel(a) jste vstávat a jít na záchod.",
                    code: "",
                    inputId: "7psqi3",
                    answers: [
                        {
                            id: "never7psqi3",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi3",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi3",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi3",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Nemohl(a) jste dobře dýchat.",
                    code: "",
                    inputId: "7psqi4",
                    answers: [
                        {
                            id: "never7psqi4",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi4",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi4",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi4",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Hlasitě jste kašlal(a) nebo chrápal(a).",
                    code: "",
                    inputId: "7psqi5",
                    answers: [
                        {
                            id: "never7psqi5",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi5",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi5",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi5",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Bylo Vám příliš chladno.",
                    code: "",
                    inputId: "7psqi6",
                    answers: [
                        {
                            id: "never7psqi6",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi6",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi6",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi6",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Bylo Vám příliš horko.",
                    code: "",
                    inputId: "7psqi7",
                    answers: [
                        {
                            id: "never7psqi7",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi7",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi7",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi7",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Měl(a) jste špatné sny",
                    code: "",
                    inputId: "7psqi8",
                    answers: [
                        {
                            id: "never7psqi8",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi8",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi8",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi8",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: inTheLastString + "Měl(a) jste bolesti.",
                    code: "",
                    inputId: "7psqi9",
                    answers: [
                        {
                            id: "never7psqi9",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "lessThanOneWeek7psqi9",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi9",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi9",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoiceWithText",
                    inputType: "text",
                    label: "Prosím, popište jiné důvody, kvůli kterým jste se musel(a) vzbudit. a jak často v týdnu.",
                    firstDescription: "Popište slovy",
                    secondDescription: "Vyberte jednu z možností. Prosím.",
                    code: "",
                    inputId: "7psqi10",
                    answers: [
                        {
                            id: "never7psqi10",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },

                        {
                            id: "lessThanOneWeek7psqi10",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi10",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi10",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null,
                    textValue: ""
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Jak byste celkově ohodnotil(a) kvalitu svého spánku během posledního měsíce?",
                    code: "",
                    inputId: "psqi8",
                    answers: [
                        {
                            id: "verygoodpsqi8",
                            label: "Velmi dobrá",
                            value: 1,
                            checked: false
                        },
                        {
                            id: "quitegoodpsqi8",
                            label: "Docela dobrá",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "quitebadpsqi8",
                            label: "Docela špatná",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "verybadpsqi8",
                            label: "Velmi špatná",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoiceWithText",
                    inputType: "text",
                    label: "Kolikrát jste během posledního měsíce užil(a) léky nebo jiné přípravky, které vám pomáhají usnout a spát (na lékařský předpis nebo bez předpisu + jaké to byly?",
                    firstDescription: "Popište slovy",
                    secondDescription: "Vyberte jednu z možností. Prosím.",
                    code: "",
                    inputId: "psqi9",
                    answers: [
                        {
                            id: "neverpsqi9",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },

                        {
                            id: "lessThanOneWeekpsqi9",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeekpsqi9",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeekpsqi9",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null,
                    textValue: ""
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Jak často jste se během minulého měsíce cítil(a) ospalý/á při řízení auta, při jídle nebo při jiné společenské činnosti?",
                    code: "",
                    inputId: "psqi10",
                    answers: [
                        {
                            id: "neverpsqi10",
                            label: "Nikdy během posledního měsíce",
                            value: 1,
                            checked: false
                        },

                        {
                            id: "lessThanOneWeekpsqi10",
                            label: "Méně než jednou týdně",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeekpsqi10",
                            label: "Jednou nebo dvakrát za týden",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeekpsqi10",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Jak těžké bylo pro vás během posledního měsíce udržet si dostatek elánu pro dokončení činností?",
                    code: "",
                    inputId: "psqi11",
                    answers: [
                        {
                            id: "neverpsqi11",
                            label: "Vůbec to nebylo těžké",
                            value: 1,
                            checked: false
                        },

                        {
                            id: "lessThanOneWeekpsqi11",
                            label: "Jen nepatrně těžké",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "OnceOrTwicePerWeekpsqi11",
                            label: "Poněkud těžké",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "thriceOrFourTimesPerWeekpsqi11",
                            label: "Velmi těžké",
                            value: 4,
                            checked: false
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Spí ve vašem bytě nebo ve vaší posteli ještě někdo jiný?",
                    code: "",
                    inputId: "psqi12",
                    answers: [
                        {
                            id: "noonepsqi12",
                            label: "Nikdo nespí v posteli ani v mém bytě",
                            value: 1,
                            checked: false
                        },

                        {
                            id: "someonedifferentroompsqi12",
                            label: "Někdo spí v mém bytě ale v jiné místnosti",
                            value: 2,
                            checked: false
                        },
                        {
                            id: "someonesameroompsqi12",
                            label: "Někdo spí ve stejné místnosti ale ne ve stejné posteli",
                            value: 3,
                            checked: false
                        },
                        {
                            id: "someoensamebedpsqi12",
                            label: "Někdo se mnou spí ve stejné posteli",
                            value: 4,
                            checked: false
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
        <Layout title={"PSQI"}>
            {/*<MyForm />*/}
            <form  className={styles.customForm}>
                <div id={"answerCard"} className={"card"}>
                    <div className={"card-body"}>
                        <h5>{currentQuestion.label}</h5>
                        <div id={"answer"} className="form-group">
                            {/*<label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>*/}
                            {getCurrentInput()}
                            <small id="emailHelp" className="form-text text-muted"></small>
                            <div id={"emptyForm"} className={"d-none"}>Vyplňte aspoň nečo</div>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                        <div className={"row text-center mt-3"}>
                            <div className={"col-12"}>Current
                                slide: {currentSlideNumber + 1} / {questions.questions.length}</div>
                            <button className={"btn btn-primary col-6"} onClick={(e) => previousSlide(e)}>{"<-"}</button>
                            <button className={"btn btn-primary col-6"} onClick={(e) => nextSlide(e)}>{"->"}</button>
                        </div>
                    </div>
                    </div>
            </form>
        </Layout>
    );
}

export default Psqi