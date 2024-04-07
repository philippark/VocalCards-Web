import {useState} from 'react';

const FlashCard = (flashcard) => {
    let [flip, setFlip] = useState(true);
    let [content, setContent] = useState("Hello");

    const handleClick = () => {
        setContent("Hola");
    }

    return (
        <div className = "card-content">
            <p>{content}</p>
            <button onClick={handleClick}>Show Answer</button>
        </div>
        
    );
}
 
export default FlashCard;