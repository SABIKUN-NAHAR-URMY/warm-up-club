import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../../images/img1.png';
import './ExerciseDetail.css'

const ExerciseDetail = (props) => {
    const[breakTime, setBreakTime] = useState([]);

    let sumTime = 0;
    for(const item of props.timeItem)
    {
        sumTime = sumTime + item;
    };

  const handelClickBreak = (data) =>{
    const newData = data;
    setBreakTime(newData);
    localStorage.setItem("Break-Time",newData);
  }


    const showToastMessage = () => {
        toast.success('Congrates,Completed Your Exercise!!!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className='exercise-detail'>
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
                    <p onClick={()=>handelClickBreak(10)}>10<small>s</small></p>
                    <p onClick={()=>handelClickBreak(20)}>20<small>s</small></p>
                    <p onClick={()=>handelClickBreak(30)}>30<small>s</small></p>
                    <p onClick={()=>handelClickBreak(40)}>40<small>s</small></p>
                    <p onClick={()=>handelClickBreak(50)}>50<small>s</small></p>
                </div>
            </div>

            <div>
                <h2>Exercise Details</h2>
                <h3 className='exercise-time'>Exercise time <span id='sumTime'>{sumTime} seconds</span></h3>
                <h3 className='break-time'>Break time <span id='breakTime'>{breakTime} seconds</span></h3>
            </div>

            <button  onClick={showToastMessage} className='activity-completed'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default ExerciseDetail;