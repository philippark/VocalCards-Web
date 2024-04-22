import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Front from './Front.js';
import Back from './Back.js';

const FlashCard = () => {
    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    const [showAnswer, setShowAnswer] = new useState(false);
    const [flashcardIndex, setFlashcardIndex] = new useState(0);

    return (
        <div className = "card-content">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            {deck && 
            <div className = "flashcard-content">
                {showAnswer ?
                <Back/>
                :
                <Front />
                }
            </div>
            }
        </div>
        
    );
}
 
export default FlashCard;