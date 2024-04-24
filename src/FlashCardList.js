import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import FlashCard from './FlashCard'

const FlashCardList = () => {
    const {id} = useParams()

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id)

    let cards = []

    if (deck){
        cards = deck.flashcards
    }
    

    return ( 
        <div>
            { 
            cards.map(flashcard => (
                <div>
                    <h1>{flashcard}</h1>
                </div>

            ))
            }
        </div>
     );
}
 
export default FlashCardList;