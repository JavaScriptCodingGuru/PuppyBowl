import React, { useState, useEffect } from "react";
import { Navbar, Content, Detail } from "./";

const Main = () => {
    const [puppies, setPuppies] = useState([]);
    const [selectedPuppy, setSelectedPuppy] = useState({});

    

    const search =  (Name, Breed)=>
    {
        const name = Name;
        const breed = Breed;
        const matches = [];
        if(name === "" && breed === "")
        {
            getPuppies();
        } 
        else if(name != "" && breed ==="")
        {

            for(let i = 0; i < puppies.length; i++)
            {
                if(puppies[i].name.slice(0, name.length) === name)
                {
                    console.log("here")
                    matches.push(puppies[i]);
                }
            }
            setPuppies(matches)
        }
        else if(breed!= "" && name === "")
        {
            for(let i = 0; i < puppies.length; i++)
            {
                if(puppies[i].breed.slice(0, breed.length) === breed)
                {
                    console.log("here")
                    matches.push(puppies[i]);
                }
            }
            setPuppies(matches)
        }
    }

    const getPuppies = async () => {
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-et/players');
            const data = await response.json();

            console.log(data.data.players)
            setPuppies(data.data.players)
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getPuppies();
    },
    []);

    return(
        <div id="main">
            <Navbar handleSearch={search}/>
            {selectedPuppy.id ?
            <Detail selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} /> :
            <Content puppies={puppies} setSelectedPuppy={setSelectedPuppy}/>}
        </div>
    )
}

export default Main