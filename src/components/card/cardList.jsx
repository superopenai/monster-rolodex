import React from 'react'
import './cardStyle.css'
import {Card} from "./singleCard/single";

export const CardList = (props) => {
    return (
        <div className='cardList'>
            {props.monsters.map(monster => (
                <Card key={monster.id} singleMonster={monster}/>
            ))}
        </div>
    )


}
