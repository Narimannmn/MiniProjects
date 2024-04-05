import React, {useState} from 'react';
import './quiz.scss'
const questions = [
    {
        title: 'Ansar lox ?',
        variants: ['da', 'daaa', 'konechno'],
        correct: 2,
    },
    {
        title: 'Beka bye bye ?',
        variants: ['fashion fashion fashion', 'bye byeeee', 'ne znau che eshe'],
        correct: 1,
    },
    {
        title: 'Ali naivnii?',
        variants: ['da', 'konechno', 'obyazatelno'],    
        correct: 1,
    },

];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>

        </div>
    );
}

function Game({question, onClickVariant, progress }) {
    return (
        <>
            <div className="progress">
                <div style={{ width: `${progress}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((el, index) => (
                    <li key={index} onClick={() => onClickVariant(index)}>{el}</li>
                ))}

            </ul>
        </>
    );
}

function Quiz() {
    const [step,setStep] = useState(0)
    const [correct,setCorrect] = useState(0)
    const question = questions[step];
    const progress = Math.round((step / questions.length) * 100)
    const onClickVariant = (index) => {
        setStep( (prev) =>  prev + 1)
        if( index == question.correct){
            setCorrect(correct + 1)
        }
    }



    return (
        <div className="Quiz">
            {step !== questions.length ? (
                    <Game question={question} onClickVariant={onClickVariant} progress={progress}/>
                ) :
                (<Result correct={correct}/>)}
            {/* <Result /> */}

        </div>
    );
}

export default Quiz;