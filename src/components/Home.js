import React from 'react';
import {Link} from 'react-router-dom';
// import './App.css';

const Home = () => {
    return (
        <div className='container home-container'>
            <h1>Welcome to Quizex</h1>
            <Link to="/quiz">
                <button>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Home;