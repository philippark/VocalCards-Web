import {useState} from "react"
import DeckList from "./DeckList";

const Home = () => {
    const [decks, setDecks] = new useState([
        {
            name: "Spanish",
            flashcards: [
                ["hello", "hola"]
            ]
        },
        {
            name: "Hindi",
            flashcards: [
                ["Hello", "Namaste"]
            ]
        }
    ]
    );

    return ( 
        <div className = "home">
            <DeckList decks = {decks}/>
        </div>
     );
}
 
export default Home;