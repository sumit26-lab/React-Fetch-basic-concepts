import React from 'react'
import Card from '../Ui/Card'
import style from './NewMeetupForm.module.css'
import { useRef } from 'react'
function NewMeetUpForm(props) {
    const TitleInputRef=useRef()
    const AddresInputRef=useRef()
    const discriptionInputRef=useRef()
    const imageInputRef=useRef()
    
    
 function submitHeandler(e){
     e.preventDefault();
     
    const EnterTitle= TitleInputRef.current.value;
    const EnterAddres = AddresInputRef.current.value;
    const Enterdiscription=discriptionInputRef.current.value;
    const EnterImage= imageInputRef.current.value;


    const MeetUpData={
        title:EnterTitle,
        address:EnterAddres,
        discription:Enterdiscription,
        image:EnterImage
    }
    // console.log(MeetUpData)
    props.onAddMeetUp(MeetUpData)
 }

 
    return (
        <Card>
        <form className={style.form} onSubmit={submitHeandler}>
        <div className={style.control}>
        <label htmlFor="image">MeetUp image</label>
        <input type="url" required id="image" ref={imageInputRef}/>

        </div>
        <div className={style.control}>
        <label htmlFor="title">MeetUp Title</label>
        <input type="text" required id="title" ref={TitleInputRef} />

        </div>

        <div className={style.control}>
        <label htmlFor="address">MeetUp Address</label>
        <input type="text" required id="address" ref={AddresInputRef}/>

        </div>

        <div className={style.control}>
        <label htmlFor="discription">MeetUp discription</label>
        <textarea id="discription" required rows="5" ref={discriptionInputRef}></textarea>

        </div>
        <div className={style.actions}>
       <button>
           Add MeetUp
       </button>
        </div>



        </form>
            
        </Card>
    )
}

export default NewMeetUpForm
