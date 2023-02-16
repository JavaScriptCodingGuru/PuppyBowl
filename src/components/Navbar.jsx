import React, {useState} from "react";


const Navbar = (props) => {

  const [dogName, setName] = useState("");
  const [breed, setBreed] = useState("");


  async function sendData(name, breed)
  {
    try
    {
      setName("");
      setBreed("");
    }
    catch(err)
    {
      console.error(err);
    }
  }

  return (
    <div id="navbar">
      
      <form onSubmit={(event)=> //props.handleSubmit(dogName, breed)
      {
        event.preventDefault();
        props.handleSearch(dogName, breed);
      }}>
        <label>Name:
        <input name="name" type="text"value={dogName} onChange={(event)=>
        {
          setName(event.target.value);
        }}/>
        </label>
        <label>Breed:
        <input name="breed" type="text"value={breed} onChange={(event)=>
        {
          setBreed(event.target.value);
        }}/>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Navbar;