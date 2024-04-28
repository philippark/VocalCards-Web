import { Link } from 'react-router-dom';
import MenuContext from './MenuContext';
import Menu from './Menu';
import { useEffect, useState } from 'react';

const DeckList = ({decks}) => {

    const {contextMenu, setContextMenu} = useState(
        {
            position: {
                x:0,
                y:0
            },
            toggled: false
        }
    )

    function handleOnContextMenu(e, rightClickDeck){
        e.preventDefault();

    }

    return ( 
        <div className = "deck-list">
            
            {decks.map(deck=>(
                
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  onContextMenu={(e)=>handleOnContextMenu(e, deck)} >
                        <h2>{deck.name}</h2>
                    </div>
                </Link>
            )
            )   
            }
            
            {
            /*decks.map(deck => (
                <div>
                    <Menu name = {deck.name}/>
                </div>
            ))
        */}

        </div>
     );
}
 
export default DeckList;