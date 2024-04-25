import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Front from './Front.js';
import Back from './Back.js';

const FlashCard = ({flashcard, index, setIndex}) => {

    const [showAnswer, setShowAnswer] = new useState(false);

    const clickShowAnswer = () => {
        setShowAnswer(true);
    }

    const clickAnswerOptions = () => {
        setIndex(index+1);
        setShowAnswer(false)
    }

    return (
        <div className = "card-content">
            <div>              
                <div className = "flashcard-content">
                    <p>{flashcard[0]}</p>
                    
                    {showAnswer ?
                    <div>
                        <hr></hr>
                        <p>{flashcard[1]}</p>
                    </div>
                    : 
                    ""}
                </div>
            

                <div className = "flashcard-options">
                    {showAnswer ? 
                    <div>
                        <button onClick={clickAnswerOptions} class = "user-option">Again</button>
                        <button onClick={clickAnswerOptions} class = "user-option">Pass</button>
                    </div>
                    :
                    <div>
                        <button onClick={clickShowAnswer} class = "user-option">Show Answer</button>
                    </div>
                    }
                </div>
                

            </div>

            
        </div>
        
    );
}
 
export default FlashCard;