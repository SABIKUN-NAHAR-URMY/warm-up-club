import React, { useEffect, useState } from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import Header from '../Header/Header';
import './Exercise.css';

const Exercise = () => {
    const[cards, setCards] = useState([]);
    const[times , setTimes] = useState([]);

    useEffect(()=>{
        fetch('ExerciseTypes.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const handleClickedTime = (exerciseTime) =>{
        const newTime = [...times,exerciseTime];
        setTimes(newTime);
    }

    return (
        <div className='exercise'>
            <div className="exercise-container">
                <div className='container'>
                    <Header></Header>

                    <div>
                        <h2>Select today's exercise</h2>
                    </div>

                    <div className='card-container'>
                        {
                        cards.map(card => <ExerciseCard 
                        key={card.id}
                        card={card}
                        handleClickedTime = {handleClickedTime}></ExerciseCard>)
                        }
                    </div>

                </div>
                
            </div>
            <div className="activity-container">
                <ExerciseDetail timeItem={times}></ExerciseDetail>
            </div>
        </div>
    );
};

export default Exercise;