import React, { useState } from "react";

function userForm() {
  const [name, setName] = useState("");
  const inputName = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit Clicked");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      {/*<input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)}/>*/}
      <input type="text" id="nameInput" ref={inputName} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default userForm;
