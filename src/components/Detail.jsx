import React from 'react';

const Detail = (props) => {
  const selectedPuppy = props.selectedPuppy;
  const setSelectedPuppy = props.setSelectedPuppy;

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