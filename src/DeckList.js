import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FlashcardDetails from './FlashcardDetails.js'

const DeckList = ({decks}) => {
    const history = useHistory();

    const handleDelete = (id) => {
        fetch("http://localhost:8000/decks/" + id,{
            method: "DELETE"
        }).then(()=>{
            window.location = "/";
        })
    }

    return ( 
        <div className = "deck-list">

            {decks.map((deck,index)=>(
                /*
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  >
                        <h2>{deck.name}</h2>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </Link>
                */
                
                <div className = "deck"  key={index}>
                    <h2>{deck.name}</h2>
                    <Link to={`/edit/${deck.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={()=> handleDelete(deck.id)}>Delete</button>
                    
                </div>
                
            )
            )   
            }

        </div>
     );
}
 
export default DeckList;