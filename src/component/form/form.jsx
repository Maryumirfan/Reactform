import React from 'react';
import { useState } from "react";
function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
      }
  return (
    <form  onSubmit={handleSubmit}>
      <label >name:
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
      </label> <br /><br />
      <label> 
        Password:
        <input type="text"  maxLength={8} />
      </label> <br /> <br />
      <input type="submit" />
    </form>
  )
}
export default Form;
