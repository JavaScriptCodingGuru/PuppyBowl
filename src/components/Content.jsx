import React from "react";

const Content = (props) => {
  const puppies = props.puppies;
  const setSelectedPuppy = props.setSelectedPuppy;

  return (
    <div className="puppy-list">
      {puppies.map((puppy, idx) => {
        return (
          <div key={puppy.id} id={puppy.id} className="puppy-box" onClick={() => {
            console.log(puppy);
            setSelectedPuppy(puppy)
            }}>
            <div className="puppy-box-header">
              <h2>{puppy.name}</h2>
              <h3>#{puppy.id}</h3>
            </div>
            <img src={puppy.imageUrl} />
            <button>See Details</button>
            <button>Delete from Roster</button>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
