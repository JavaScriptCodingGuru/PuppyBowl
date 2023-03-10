import React from "react";
import { Link } from 'react-router-dom';

const Content = (props) => {
  let puppies = props.puppies;
  const setSelectedPuppy = props.setSelectedPuppy;
  const toShow = props.toShow;

  if(toShow)
  {
    let holder = [];
    for(let i = 0; i < puppies.length; i++)
    {
      if(toShow[i] === puppies.id) holder.push(puppies[i]);
    }
    puppies = holder;
  } 


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
            <Link to={`detail/${puppy.id}`}><button>See Details</button></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
