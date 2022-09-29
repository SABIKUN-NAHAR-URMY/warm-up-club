import React from 'react';
import './ExcerciseCard.css';

const ExcerciseCard = (props) => {
    const{img, name, detail, age, time} = props.card;
    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{detail}</p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}</h5>
            <button className='btn-addList'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default ExcerciseCard;