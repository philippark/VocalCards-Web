import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const FlashCard = () => {
    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    const [showAnswer, setShowAnswer] = new useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className = "card-content">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            {deck && 
            <div className = "flashcard-content">
                <p>{deck.flashcards[0][0]}</p>

                {showAnswer ?
                <div className = "post-answer">
                    <button onClick={handleClick}>Again</button>
                    <button onClick={handleClick}>Pass</button>
                </div>
                :
                <div className = "pre-answer">
                    <button onClick={handleClick}>Show Answer</button>
                </div>
                }
            </div>
            }
        </div>
        
    );
}
 
export default FlashCard;