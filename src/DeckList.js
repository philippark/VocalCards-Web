import { Link } from 'react-router-dom';
import MenuContext from './MenuContext';

const DeckList = ({decks}) => {
    return ( 
        <div className = "deck-list">
            {decks.map(deck=>(
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  onContextMenu={(e)=>{e.preventDefault(); console.log("right clicked")}} >
                        <h2>{deck.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default DeckList;