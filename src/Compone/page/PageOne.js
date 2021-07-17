import React, { useContext } from 'react'
import Favorate_context from '../Store/favorate_context'
import MeetUpList from '../ALlMeetup/MeetUpList'
export default function PageOne(props) {
    const FevoratCntx=useContext(Favorate_context)
    let context;
    if(FevoratCntx.totalefavorits === 0){
        context=<p>You Got No  Favorate yet, Start To Adding   </p>
    }
    else{
        context=<MeetUpList MeetupItem={FevoratCntx.favorits} / >
    }

    return (
        <section style={{alignContent:"center"}}>
            <h1>My Favorate</h1>
            {context}
        </section>
        
    )
}
