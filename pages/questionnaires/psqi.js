import Layout from "../../components/layout";

import styles from './Form.module.css'
import React from 'react';




function Psqi(props) {
    function getCurrentInput() {
        const currentQuestion = questions.questions[currentSlideNumber];
        if (currentQuestion.questionType === "minutes") {
            return <input type="number" className="form-control"  onSubmit={(e) => validateMinutes(e)} placeholder="Enter minutes" min="0" step={1} required={true}/>;
        } else if (currentQuestion.questionType === "multipleChoice") {
            return (
                currentQuestion.answers.map((answer, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="radio" name="options" id={answer.id} value={answer.value}/>
                            <label className="form-check-label" htmlFor={answer.id}>{answer.label}</label>
                        </div>
                    )
                })
            )
        }
        return <span>no input</span>
    }

    function validateMinutes() {
        const answer = questions.questions[currentSlideNumber].actualAnswer
        console.log("validating minutes")
        console.log(answer)
    }

    function validateMultipleChoice() {
        const answer = questions.questions[currentSlideNumber].actualAnswer
        const answerValue = questions.questions[currentSlideNumber].actualAnswerValue
        console.log("validating minutes")
        console.log(answer)
        console.log(answerValue)
    }

    const questions = {
        questions:
            [
                {
                    questionType: "minutes",
                    inputType: "number",
                    label: "Jak dlouho (v minutách) vám obvykle každý večer během posledního měsíce trvalo než jste usnul(a)?",
                    code: "",
                    validation: "",
                    answers: [],
                    actualAnswer: ""
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "What is the capital of France?",
                    code: "",
                    validation: "",
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
                    actualAnswer: "",
                    actualAnswerValue: null
                }
            ],
        totalQuestions: 2
    }

    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(0);
    const [formData, setFormData] = React.useState({});

    function handleSubmit(event) {
        event.preventDefault();
        const currentQuestion = questions.questions[currentSlideNumber];
        // validation
        if (currentQuestion.questionType === 'minutes') {
            validateMinutes()
        } else if (currentQuestion.questionType === 'multipleChoice') {
            validateMultipleChoice();
        }

        // setCurrentSlideNumber(currentSlideNumber + 1)
        setFormData({
            ...formData,
            [currentQuestion.code]: currentQuestion.actualAnswer,
        });
    }

    function previousSlide(e) {
        e.preventDefault()
        if (currentSlideNumber === 0) {
            return;
        }
        setCurrentSlideNumber(currentSlideNumber - 1)
    }

    function nextSlide(e) {
        e.preventDefault()
        if (currentSlideNumber === questions.totalQuestions - 1) {
            return;
        }
        setCurrentSlideNumber(currentSlideNumber + 1)
    }


    const currentQuestion = questions.questions[currentSlideNumber];

    return (
        <Layout title={"psqi"}>
                        <form className={styles.customForm}>
                            <div className="form-group text-center">
                                <label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>
                                {/*<input type="email" className="form-control" id="exampleInputEmail1"*/}
                                {/*       aria-describedby="emailHelp"/>*/}
                                {/*<input type={currentQuestion.questionType} className={"form-control"}/>*/}
                                {getCurrentInput()}
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                            <div className={"row text-center mt-3"}>
                                <div className={"col-12"}>Current slide: {currentSlideNumber} / {questions.totalQuestions}</div>
                                <button className={"btn btn-primary col-6"} onClick={(e) => previousSlide(e)}>{"<-"}</button>
                                <button className={"btn btn-primary col-6"} onClick={(e) => nextSlide(e)}>{"->"}</button>
                            </div>
                        </form>
        </Layout>
    );
}

export default Psqi