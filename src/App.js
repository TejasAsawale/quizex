import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import './App.css'; // Assuming your CSS file is correctly imported here

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
