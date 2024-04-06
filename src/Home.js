import {useState} from "react"
import DeckList from "./DeckList";

const Home = () => {
    const [decks, setDecks] = new useState([
        {name: 'Spanish'},
        {name: "Hindi"},
        {name: "Chinese"}
    ]
    );

    return ( 
        <div className = "home">
            <DeckList decks = {decks}/>
        </div>
     );
}
 
export default Home;