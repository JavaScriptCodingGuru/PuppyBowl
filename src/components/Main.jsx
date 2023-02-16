import React, { useState, useEffect } from "react";
import { Navbar, Content } from "./";

const Main = () => {
    const [puppies, setPuppies] = useState([]);

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
            <Content puppies={puppies}/>
        </div>
    )
}

export default Main