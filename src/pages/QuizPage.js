import React from 'react';
import Quiz from '../components/Quiz';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
    {
        question: 'Which of the following command is used to create react-js-app?',
        options: ['npx create-react-app app-name', 'npm install create-react-app', 'npx install create-react-app -g', 'install - l create-react-app'],
        correctAnswer: 'npx create-react-app app-name',
    },
    {
        question: 'What is your name?',
        options: ['aman', 'rohan', 'tejas', 'om'],
        correctAnswer: 'tejas' ,
    },
];

const QuizPage = () => {
    const navigate = useNavigate();

    const handleQuizFinish = (score) => {
        navigate('/result', { state: { score: score, totalQuestions: quizQuestions.length } });
    };

    return (
        <div className="quiz-page-container">
            <Quiz onQuizFinish={handleQuizFinish} />
        </div>
    );
};

export default QuizPage;
