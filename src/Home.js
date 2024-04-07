import {useState} from "react"
import DeckList from "./DeckList";

const Home = () => {
    const [decks, setDecks] = new useState([
        {
            name: "Spanish",
            cards: [
                ["hello", "hola"]
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