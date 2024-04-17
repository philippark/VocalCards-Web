import {useState} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

const FlashCard = () => {
    const {name} = useParams()

    return (
        <div className = "card-content">
            <h2>{name}</h2>
        </div>
        
    );
}
 
export default FlashCard;