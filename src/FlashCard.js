import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const FlashCard = () => {
    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    return (
        <div className = "card-content">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            { deck && {deck} }
        </div>
        
    );
}
 
export default FlashCard;