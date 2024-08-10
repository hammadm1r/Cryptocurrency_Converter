import React, {useState}from "react";


function Notes() {
    const [notes,setNotes] = useState([]);
    const [curNote,setCurnote] =useState();

    function addNote(event){
        const newNotesarray=[...notes,curNote];
        setNotes(newNotesarray)
    }
    function updateNote(event) {
        setCurnote(event.target.value)
    }
  return (
    <>
    <input onChange={updateNote} type="text"/>
    <button onClick={addNote}>Submit</button> 
    <ul>{
        notes.map((note) => {
            return (<li>
               {note}
            </li>)
        })
}</ul>
    </>
  )
}

export default Notes