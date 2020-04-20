import React from 'react';

import './card.styles.css';


//either use { return (
//    jsx
//)}

//or
//(
//     jsx
// )
export const Card=(props)=>{
return(
    <div className="card-container">
        <img className="imagesize"src={`https://robohash.org/${props.monster.id}?set=set3`} alt="" />
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
)
}