import { Link } from 'react-router-dom';
import MenuContext from './MenuContext';
import Menu from './Menu';
import { useEffect, useState } from 'react';

const DeckList = ({decks}) => {

    const [clicked, setClicked] = useState(true);
    const [points, setPoints] = useState({x:0,y:0});

    useEffect(()=>{
        const handleClick = () => setClicked(false);

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        }
    }, []);

    return ( 
        <div className = "deck-list">
            {/*
            {decks.map(deck=>(
                
                <Link to={`/decks/${deck.id}`}>
                    <div className = "deck"  onContextMenu={(e)=>{e.preventDefault(); console.log("right clicked")}} >
                        <h2>{deck.name}</h2>
                    </div>
                </Link>
            */}

            {decks.map(deck => (
                <div onContextMenu={(e)=>{
                    e.preventDefault();
                    setClicked(true);
                    setPoints({
                        x: e.pageX,
                        y: e.pageY
                    });
                    console.log("Right clicked", e.pageX, e.pageY);
                
                    }}>
                    <Menu name = {deck.name}/>
                </div>
            ))}

            {clicked && 
            <onContextMenu top = {points.y} left = {points.x}>
                <ul>
                    <li>Edit</li>
                    <li>Copy</li>
                    <li>Delete</li>
                </ul>
            </onContextMenu>
            }

        </div>
     );
}
 
export default DeckList;