import React, { useState, useEffect } from "react";
import { Navbar, Content, Detail } from "./";

const Main = () => {
    const [puppies, setPuppies] = useState([]);
    const [selectedPuppy, setSelectedPuppy] = useState({});

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
            <Navbar />
            {selectedPuppy.id ?
            <Detail selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} /> :
            <Content puppies={puppies} setSelectedPuppy={setSelectedPuppy}/>}
        </div>
    )
}

export default Main