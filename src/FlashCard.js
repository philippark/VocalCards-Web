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

    const clickHandle = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className = "card-content">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            {deck && 

            <div className = "flashcard">

                {/*
                <div className = "flashcard-content">
                <p>{"hola, esta bien?"}</p>
                
                {showAnswer ? <p>si</p>: ""}
                </div>

                
                {showAnswer ? 
                <div className = "flashcard-buttons">
                <button onClick={clickHandle}>Again</button>
                <button onClick={clickHandle}>Pass</button>
                </div>
                :
                <div className = "flashcard-buttons">
                <button onClick={clickHandle}>Change</button>
                </div>
                
                
                */}
                

            </div>

            }
        </div>
        
    );
}
 
export default FlashCard;