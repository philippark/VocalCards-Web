import {useEffect, useState} from "react"
import DeckList from "./DeckList";

const Home = () => {
    const [decks, setDecks] = new useState(null);
    
    useEffect( ()=>{
        fetch("http://localhost:8000/decks").then(res => {
            return res.json();
        }).then(data => {
            setDecks(data);
        })
    }, [])

    return ( 
        <div className = "home">
            {decks && <DeckList decks = {decks}/>}
        </div>
     );
}
 
export default Home;