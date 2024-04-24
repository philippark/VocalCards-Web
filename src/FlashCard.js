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

            <div>              
                <div className = "flashcard-content">
                    <p>{"hola, esta bien?"}</p>
                    
                    {showAnswer ?
                    <div>
                        <hr></hr>
                        <p>si</p>
                    </div>
                    : 
                    ""}
                </div>
            

                <div className = "flashcard-options">
                    {showAnswer ? 
                    <div>
                        <button onClick={clickHandle} class = "user-option">Again</button>
                        <button onClick={clickHandle} class = "user-option">Pass</button>
                    </div>
                    :
                    <div>
                        <button onClick={clickHandle} class = "user-option">Change</button>
                    </div>
                    }
                </div>
                

            </div>

            }
        </div>
        
    );
}
 
export default FlashCard;