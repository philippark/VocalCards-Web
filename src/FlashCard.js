import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const FlashCard = () => {
    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    const [showAnswer, setShowAnswer] = new useState(false);
    const [flashcardIndex, setFlashcardIndex] = new useState(0);

    const handleClick = () => {
        setShowAnswer(!showAnswer);

        if (showAnswer) {
            let i = flashcardIndex;
            i+=1;
            setFlashcardIndex(i);
        }
    }

    return (
        <div className = "card-content">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            {deck && 
            <div className = "flashcard-content">
                {showAnswer ?
                <div className = "post-answer">

                    <p>{deck.flashcards[flashcardIndex][1]}</p>

                    <button onClick={handleClick}>Again</button>
                    <button onClick={handleClick}>Pass</button>
                </div>
                :
                <div className = "pre-answer">
                    <p>{deck.flashcards[flashcardIndex][0]}</p>

                    <button onClick={handleClick}>Show Answer</button>
                </div>
                }
            </div>
            }
        </div>
        
    );
}
 
export default FlashCard;