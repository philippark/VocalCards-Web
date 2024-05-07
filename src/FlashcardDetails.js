import Popup from "reactjs-popup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [flashcards, setFlashcards] = useState([["a","b"]]);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const deck = { name, flashcards};
    
        fetch('http://localhost:8000/decks/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(deck)
        }).then(() => {
            history.push('/');
            window.location.reload();
        })
    }

    return ( 
        <div className="create">
            <p>Set Title</p>
            <input type = "text" required value = {name} onChange = {(e)=>setName(e.target.value)}/>

            <p>Front</p>
            <p>Back</p>
            <button onClick={() => {setFlashcards([...flashcards, ["",""]]);}}>Add a new card</button>

            {flashcards.map(flashcard=>(
                <div>
                    <input type = "text" value = {flashcard[0]} onChange = {(e)=>alert(flashcard[0])} />
                    <input type = "text" value = {flashcard[1]}/>
                </div>
            ))}


            <p>Finish</p>
            <button>Create set</button>
        </div>
     );
}
 
export default Create;