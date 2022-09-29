import React from 'react';
import './ExerciseCard.css';

const ExerciseCard = (props) => {
    const{img, name, detail, age, time} = props.card;
    return (
        <div className='single-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{detail}</p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}<small>s</small></h5>
            <button onClick={()=>props.handleClickedTime(time)} className='btn-addList'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default ExerciseCard;