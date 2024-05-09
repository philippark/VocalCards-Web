import Popup from "reactjs-popup";
import { useEffect, useState} from "react";
import useFetch from './useFetch'
import { useHistory, useParams} from "react-router-dom";

const Create = () => {
    const {id} = useParams();

    const [name, setName] = useState("");
    const [flashcards, setFlashcards] = useState(
        [
        ]
    );

    const { error, isPending, data: deck } = useFetch('http://localhost:8000/decks/' + id);

    useEffect(()=>{
        if (deck && id !== "create"){
            setName(deck.name);
            setFlashcards(deck.flashcards);

        }
    }, [deck])
    

    const history = useHistory();

    
    const handleSubmit = (e) => {

        if (id !== ""){
            fetch("http://localhost:8000/decks/" + id,{
                method: "DELETE"
            }).then(()=>{
                window.location = "/";
            })
        }

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
        <div>
            {id !== "create" && isPending && <h2>Loading...</h2>}
            {id !== "create" && error && <div>{ error }</div> }
            {

                <div className="create">
                    
                    <p>Title</p>
                    <input type = "text" required value = {name} onChange = {(e)=>setName(e.target.value)}/>

                    <hr></hr>

                    
                    {flashcards.map((flashcard, index)=>(
                        <div key = {index}>
                            <input type = "text" value = {flashcard[0]} onChange = {(e)=>updateCard(index, e.target.value, flashcard[1])} />
                            <input type = "text" value = {flashcard[1]} onChange = {(e)=>updateCard(index, flashcard[0], e.target.value)} />

                        </div>
                    ))}

                    <button onClick={() => {setFlashcards([...flashcards, ["",""]]);}}>Add a new card</button>
                    
                    <hr></hr>
                    <button onClick={handleSubmit}>Finish set</button>
                    
                </div>
            }
        </div>
    );
}
 
export default Create;