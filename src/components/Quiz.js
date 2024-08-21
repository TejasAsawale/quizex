import React, { useState } from 'react';
import Question from './Question';

const quizQuestions = [
    {
        question: 'Which of the following command is used to create react-js-app?',
        options: ['npx create-react-app app-name', 'npm install create-react-app', 'npx install create-react-app -g', 'install - l create-react-app'],
        correctAnswer: 'npx create-react-app app-name',
    },
    {
        question: 'What is your name?',
        options: ['aman', 'rohan', 'tejas', 'om'],
        correctAnswer: 'tejas',
    },
    // Add more questions if needed
];

const Quiz = ({ onQuizFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswerSelect = (selectedAnswer) => {
        if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        } else {
            setIsQuizFinished(true);
            onQuizFinish(score + (selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? 1 : 0));
        }
    };

    if (isQuizFinished) {
        return null;
    }

    return (
        <Question
            question={quizQuestions[currentQuestion].question}
            options={quizQuestions[currentQuestion].options}
            onAnswerSelect={handleAnswerSelect}
        />
    );
};

export default Quiz;
