import {useEffect, useState} from "react"
import DeckList from "./DeckList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data: decks } = useFetch('http://localhost:8000/decks')

    return ( 
        <div className = "home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { decks && <DeckList decks={decks} /> }
        </div>
     );
}
 
export default Home;