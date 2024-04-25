import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import FlashCard from './FlashCard'
import { useState } from 'react'

const FlashCardList = () => {
    const [index, setIndex] = useState(0);

    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    let cards = []

    if (deck){
        cards = deck.flashcards
    }

    const clickHandle = () => {
        setIndex(1);
    }
    

    return ( 
        <div>
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div> }
            {deck && 
            <div>
                <FlashCard flashcard={deck.flashcards[index]} index = {index} setIndex={setIndex} />
            </div>
            }
        </div>
     );
}
 
export default FlashCardList;