import React from 'react';
// import './App.css';

const Question = ({question, options, onAnswerSelect }) => {
    return (
        <div className='container question-container'>
            <h2>{question}</h2>
            {options.map((option, index) => (
                <button key={index} onClick={()=> onAnswerSelect(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Question;