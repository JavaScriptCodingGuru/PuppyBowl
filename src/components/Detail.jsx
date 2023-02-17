import React, {useState} from 'react';

const Detail = (props) => {
  const [puppy, setPuppy] = useState({});
  let { id } = useParams();


  const getPuppies = async () => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-et/players');
        const data = await response.json();

        console.log(data.data.players)
        const puppy = data.data.players.find((puppy) => {
          return puppy.id === id;
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
    <div id="puppy-detail">
      <h1>{selectedPuppy.name}</h1>
      <h2>ID: {selectedPuppy.id}</h2>
      <h2>Breed: {selectedPuppy.breed}</h2>
      <img src={selectedPuppy.imageUrl} />
      <button onClick={() => {
        setSelectedPuppy({})
      }}>Exit</button>
    </div>
  )
}


export default Detail;