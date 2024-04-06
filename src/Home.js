import {useState} from "react"

const Home = () => {
    const [decks, setDecks] = new useState([
        {name: 'Spanish'},
        {name: "Hindi"},
        {name: "Chinese"}
    ]
    );

    return ( 
        <div className = "home">
            {decks.map(deck=>(
                <div className = "deck">
                    <h2>{deck.name}</h2>
                </div>
            ))}
        </div>
     );
}
 
export default Home;