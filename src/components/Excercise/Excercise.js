import React, { useEffect, useState } from 'react';
import ExcerciseCard from '../ExcerciseCard/ExcerciseCard';
import Header from '../Header/Header';
import './Excercise.css';

const Excercise = () => {
    const[cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('ExcerciseTypes.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='excercise'>
            <div className="excercise-container">
                <div className='container'>
                <Header></Header>

                <div>
                    <h2>Select today's exercise</h2>
                </div>

                <div className='card-container'>
                {
                    cards.map(card => <ExcerciseCard 
                        key={card.id}
                        card={card}></ExcerciseCard>)
                }
                </div>

                </div>
                
            </div>
            <div className="activity-container">
                
            </div>
        </div>
    );
};

export default Excercise;