import Popup from "reactjs-popup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const flashcards = [];

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
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <input type = "text" required value = {name} onChange = {(e)=>setName(e.target.value)}/>
                <button>Ok</button>
                <button>Cancel</button>
            </form>
        </div>
     );
}
 
export default Create;