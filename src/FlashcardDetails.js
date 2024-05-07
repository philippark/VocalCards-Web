import Popup from "reactjs-popup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [flashcards, setFlashcards] = useState(
        [
            {
                "id":"1",
                "front": "a",
                "back": "b"
            },
            {
                "id":"2",
                "front":"hello",
                "back":"privet"
            }
        ]
    );

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

    const updateCard = (id, new_front, new_back) => {

        const updatedFlashcards = flashcards.map(flashcard=>{
            if (flashcard.id == id){
                return {
                    id,
                    front: new_front,
                    back: new_back
                }
                
            }
            else{
                return flashcard;
            }
        })

        setFlashcards(updatedFlashcards);
    }

    return ( 
        <div className="create">
            <p>Set Title</p>
            <input type = "text" required value = {name} onChange = {(e)=>setName(e.target.value)}/>

            <p>Flashcards</p>

            <button onClick={() => {setFlashcards([...flashcards, ["",""]]);}}>Add a new card</button>

            {flashcards.map(flashcard=>(
                <div>
                    <input type = "text" value = {flashcard.front} onChange = {(e)=>updateCard(flashcard.id, e.target.value, flashcard.back)} />
                    <input type = "text" value = {flashcard.back} onChange = {(e)=>updateCard(flashcard.id, flashcard.front, e.target.value)} />

                </div>
            ))}


            <p>Finish</p>
            <button>Create set</button>
        </div>
     );
}
 
export default Create;