import React, { useContext } from 'react'
import style from '../LayoutModuleCss/MeetupItem.module.css'
import Card from '../Ui/Card'
import Favorate_context from '../Store/favorate_context'

function MeetupItem(props) {
    const fevoritCntx=useContext(Favorate_context)
    const ItemISFevorate=fevoritCntx.itemISfavrites(props.id)
    console.log("ItemFev",ItemISFevorate)
    function toggelFevoritsStatusHandluer(){
        if(ItemISFevorate){
            fevoritCntx.remoivefavorits(props.id)
        }
        else{
            fevoritCntx.addfavorits ({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }
    return (
        <li className={style.item}>
        <Card>

              
          <div className={style.image}>
          <img src={props.image} alt={props.title} />

          </div>  
          <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>

          </div>
          <div className={style.actions}>
              <button onClick={toggelFevoritsStatusHandluer}>{ItemISFevorate ? "Remove from Fevraties":"To Fevraties"}</button>
          </div>
          
    
        </Card>
        </li>
    )
}

export default MeetupItem
