import { createContext, useState } from "react"
const Favorate_context=createContext({
    favorits:[],
    totalefavorits:0,
    addfavorits: (fevoritsMeetup)=>{},
    
    remoivefavorits:(meetupid)=>{},
    itemfavrites:(meetupid)=>{}
});

 export function FavoritesContextProvider(props){
    const[usefavorits,Setfavorits]=useState([]);

    function addFavoritesHeandler(fevoritsMeetup){
        Setfavorits((preUserFevorites)=>{
           return preUserFevorites.concat(fevoritsMeetup)})
    }
    function remoiveFavoritesHeandler(meetupid){
        Setfavorits(preUserFevorites=>{
            return preUserFevorites.filter(meetup=>meetup.id !==meetupid);
        })
    }
    function itemISFavritesHeandler(meetupid){
        return usefavorits.some(meetup=>meetup.id === meetupid)
    }
    const context={
        favorits:usefavorits,
        totalefavorits: usefavorits.length,
        addfavorits: addFavoritesHeandler,
        remoivefavorits:remoiveFavoritesHeandler,
        itemISfavrites:itemISFavritesHeandler
    }
    return<Favorate_context.Provider value={context}>
      {props.children}
    </Favorate_context.Provider>
}
export default Favorate_context