import React from 'react';
import { Link } from 'react-router-dom';

const Score = ({ score, totalQuestions }) => {
    return (
        <div className="container score-container">
            <h1>Your Score: {score}/{totalQuestions}</h1>
            <Link to="/quiz" className="link-button">
                <button>Retake Quiz</button>
            </Link>
            <Link to="/" className="link-button">
                <button>Go Home</button>
            </Link>
        </div>
    );
};

export default Score;
