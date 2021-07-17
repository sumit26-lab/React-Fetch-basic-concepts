import React, { Component, useState,useEffect } from 'react'
import MeetUpList from '../ALlMeetup/MeetUpList';
// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

 function PageThree() {

    const[isLoading,SetisLoading]=useState(false);
    const[LoadingMeetUp,SetLoadingMeetUp]=useState([])
   useEffect(() => {
      SetisLoading(true)
      
    
      fetch('https://react-getting-started-6898a-default-rtdb.firebaseio.com/meetups.json').then(response=>{
        return response.json();
      }).then(data=>{
        const meetups=[];
        for(const key in data){
          const meetup={
            id:key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        SetisLoading(false)
        SetLoadingMeetUp(meetups)
      })
    
    }, [])
      
      if(isLoading){
        return(
          <section>
            <p>Plase Wait Loadling Up ..</p>
          </section>
        )
      }
 
        return (
            <section>
               <h1>ALlMeetup</h1>
              <MeetUpList MeetupItem={LoadingMeetUp} />
            </section>
        )
    }
export default PageThree
