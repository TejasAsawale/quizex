import React from 'react';
import { useLocation } from 'react-router-dom';
import Score from '../components/Score';

const ResultPage = () => {
    const location = useLocation();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 }; // Provide defaults

    return (
        <div className="result-page-container">
            <Score score={score} totalQuestions={totalQuestions} />
        </div>
    );
};

export default ResultPage;
