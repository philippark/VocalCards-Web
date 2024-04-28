import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import ContextMenu from './ContextMenu';

const DeckList = ({decks}) => {
    const contextMenuRef = useRef(null);
    const [contextMenu, setContextMenu] = useState(
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

        const contextMenuAttr = contextMenuRef.current.getBoundingClientRect()

        const isLeft = e.clientX < window?.innerWidth/2

        let x 
        let y = e.clientY

        if (isLeft){
            x = e.clientX
        }
        else{
            x = e.clientX - contextMenuAttr.width
        }

        setContextMenu({
            position: {
                x,
                y
            },
            toggled: true
        })

        alert("CM")

    }

    return ( 
        <div className = "deck-list">
            
            {decks.map(deck=>(
                
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  >
                        <h2 onContextMenu={(e)=>handleOnContextMenu(e, deck)} >{deck.name}</h2>
                    </div>
                </Link>
            )
            )   
            }

            <ul>
                {decks.map(deck=>{
                    return (
                        <li onContextMenu={(e)=>handleOnContextMenu(e, deck)} >
                        {deck.name}
                        </li>
                    )
                })}
            </ul>

            <ul>
                <ContextMenu 
                    contextMenuRef={contextMenuRef}
                    isToggled={contextMenu.toggled}
                    positionX={contextMenu.position.x}
                    positionY={contextMenu.position.y}
                    buttons={[
                        {
                            text: "Delete",
                            onClick: () => alert("Delete"),
                            isSpacer: false
                        },
                        {
                            text:"Edit",
                            onClick: () => alert("Edit"),
                            isSpacer: false
                        }
                        ]   
                    }

                />
            </ul>

        </div>
     );
}
 
export default DeckList;