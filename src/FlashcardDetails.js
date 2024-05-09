import Popup from "reactjs-popup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [flashcards, setFlashcards] = useState(
        [
            ["front", "back"]
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

    //updating a input form
    const updateCard = (target_index, new_front, new_back) => {

        const updatedFlashcards = flashcards.map((flashcard, index)=>{
            if (index === target_index){
                return [
                    new_front,
                    new_back
                ]
                
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

            {flashcards.map((flashcard, index)=>(
                <div>
                    <p>{index}</p>
                    <input type = "text" value = {flashcard[0]} onChange = {(e)=>updateCard(index, e.target.value, flashcard[1])} />
                    <input type = "text" value = {flashcard[1]} onChange = {(e)=>updateCard(index, flashcard[0], e.target.value)} />

                </div>
            ))}


            <p>Finish</p>
            <button onClick={handleSubmit}>Create set</button>
        </div>
     );
}
 
export default Create;