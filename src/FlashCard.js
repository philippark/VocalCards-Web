import {useState} from 'react';

const FlashCard = (flashcard) => {
    let [flip, setFlip] = useState(false);
    let [content, setContent] = useState("Hello");

    const handleClick = () => {
        setContent("Hola");
        setFlip(true);
    }

    return (
        <div className = "card-content">
            
            <p>{flip ? "Hola" : "Hello"}</p>

            {flip ? <button>Pass</button> : <button onClick={handleClick}>Show Answer</button>}

        </div>
        
    );
}
 
export default FlashCard;