import React from 'react';
import image from '../../images/img1.png';
import './ExcerciseDetail.css'

const ExcerciseDetail = () => {
    return (
        <div className='excercise-detail'>
            <div className='user'>
                <img src={image} alt="" />
                <div>
                    <h3>Sabikun Nahar</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='user-info'>
                <div>
                    <h2>50<small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.1</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>25<small>yr</small></h2>
                    <p>Age</p>
                </div>
            </div>

            <div>
                <h2>Add A Break</h2>
                <div className='addBreak'>
                    <p>10<small>s</small></p>
                    <p>20<small>s</small></p>
                    <p>30<small>s</small></p>
                    <p>40<small>s</small></p>
                    <p>59<small>s</small></p>
                </div>
            </div>

            <div>
                <h2>Excercise Details</h2>
                <h3>Excercise time <span> </span></h3>
                <h3>Break time <span> </span></h3>
            </div>

            <button>Activity Completed</button>
            
        </div>
    );
};

export default ExcerciseDetail;