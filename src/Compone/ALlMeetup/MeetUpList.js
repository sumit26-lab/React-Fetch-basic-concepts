import React from 'react'
import MeetupItem from'./MeetupItem'
import  classs from '../LayoutModuleCss/MeetupList.module.css'

function MeetUpList(props) {
    return (
        <ul className={classs.list}>
        {props.MeetupItem?.map(item=>
        <MeetupItem key={item.id} id={item.id}
         image={item.image} title={item.title}  address={item.address}  
         description={item.description}
         />)}
        </ul>
    )
}

export default MeetUpList
