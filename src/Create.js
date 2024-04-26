import Popup from "reactjs-popup";
import { useState } from "react";

const Create = () => {
    const [name, setName] = useState("");
    return ( 
        <div className="create">
            <input type = "text" required value = {name} onChange = {(e)=>setName(e.target.value)}/>
            <button>Ok</button>
            <button>Cancel</button>
        </div>
     );
}
 
export default Create;