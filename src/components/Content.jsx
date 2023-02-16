import React from 'react';

const Content = (props) => {
const puppies = props.puppies;

return <div className="puppy-list">
{
    puppies.map((puppy, idx)=>
    {
        return <div key={puppy.id} id={puppy.id} className = "puppy-box">
            <div className="puppy-box-header">
            <p>{puppy.name}</p>
            <p>{puppy.id}</p>
            </div>
            <img src={puppy.imageUrl}/>
            <button >See Details</button>
            <button>Delete from Roster</button>
        </div>
    })
}

</div>


}


export default Content;