import { Link } from 'react-router-dom';

const DeckList = ({decks}) => {
    return ( 
        <div className = "deck-list">
            {decks.map(deck=>(
                <div className = "deck">
                    <Link to={`/decks/${deck.name}`}>
                        <h2>{deck.name}</h2>
                    </Link>
                
                </div>
            ))}
        </div>
     );
}
 
export default DeckList;