import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [puppy, setPuppy] = useState({});
  let { id } = useParams();


  const getPuppies = async () => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-et/players');
        const data = await response.json();

        console.log(data.data.players)
        console.log(`${id}`)
        const puppy = data.data.players.find((puppy) => {
          return `${puppy.id}` === `${id}`;
        })
        console.log(puppy)

        setPuppy(puppy)
    } catch(err) {
        console.error(err);
    }
}

useEffect(() => {
    getPuppies();
},
[]);

  return (
    puppy.id ?
    <div id="puppy-detail">
      <h1>{puppy.name}</h1>
      <h2>ID: {puppy.id}</h2>
      <h2>Breed: {puppy.breed}</h2>
      <img src={puppy.imageUrl} />
      <button>Exit</button>
    </div> :
    null
  )
}


export default Detail;