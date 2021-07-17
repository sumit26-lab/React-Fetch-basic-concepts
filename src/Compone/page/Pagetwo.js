import React from 'react'
import NewMeetUpForm from '../ALlMeetup/NewMeetUpForm'
import { useHistory } from 'react-router'

export default function Pagetwo() {
    const history =useHistory();
    function addMeetUpHeandler(MeetUpData){
        fetch(
            'https://react-getting-started-6898a-default-rtdb.firebaseio.com/meetups.json',{
                method:'POST',
                body: JSON.stringify(MeetUpData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            
            ).then(()=>{
                history.replace('/')
            })
    }
    return (
        <section>
            <h1> helo im PageTwo Component</h1>
            <NewMeetUpForm onAddMeetUp={addMeetUpHeandler}/>
        </section>
    )
}
