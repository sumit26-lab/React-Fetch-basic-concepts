import React from 'react'
import style from './Card.module.css'
function Card(props) {
    
    return (
        //send in item  componed top prop
        <div className={style.card}>
        {props.children}
            
        </div>
    )
}

export default Card
