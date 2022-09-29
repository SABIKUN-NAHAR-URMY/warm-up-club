import React from 'react';
import Header from '../Header/Header';
import './Excercise.css';

const Excercise = () => {
    return (
        <div className='excercise'>
            <div className="excercise-container">
                <Header></Header>
            </div>
            <div className="activity-container">
                <h1>Activity section</h1>
            </div>
        </div>
    );
};

export default Excercise;