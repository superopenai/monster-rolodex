import React from 'react'
import './singleCard.css'
export const Card = (props) =>{
    console.log(props)
    return(
        <div className='cardContainer'>
            <img src={`https://robohash.org/${props.singleMonster.id}?set=set2`} alt="monster"/>
            <h2>{props.singleMonster.name}</h2>
            <h3>{props.singleMonster.email}</h3>

        </div>
    )
}
