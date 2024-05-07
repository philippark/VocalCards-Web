import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DeckList = ({decks}) => {
    return ( 
        <div className = "deck-list">
            
            {/*
            {decks.map(deck=>(
                
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  >
                        <h2 onContextMenu={(e)=>handleOnContextMenu(e, deck)} >{deck.name}</h2>
                    </div>
                </Link>
            )
            )   
            }
            */}

            {
            <ul>
                {decks.map(deck=>{
                    return (
                        <li key = {deck.id}>
                        {deck.name}
                        </li>
                    )
                })}
            </ul>
            }
            

        </div>
     );
}
 
export default DeckList;