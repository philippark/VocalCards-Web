import { Link } from 'react-router-dom';

const DeckList = ({decks}) => {
    return ( 
        <div className = "deck-list">
            {decks.map(deck=>(
                <Link to={`/decks/${deck.name}`}>
                    <div className = "deck">
                        <h2>{deck.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default DeckList;