import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import property from '../LayoutModuleCss/Layout.Module.css'
import Favorate_context from '../Store/favorate_context'

const Main_Navigation=()=> {

        const favorateCtnx=useContext(Favorate_context)
        return (
            <header className={property.header}>
            <div className={property.logo}> React router</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Favorate
                        <span className={property.badge}>
                        {favorateCtnx.totalefavorits}</span>
                        </Link>
                        </li>
                        <li>

                        <Link to="/Pagetwo"> Insert-Details</Link>
                        </li>

                        <li>
                         <Link to="/PageThree">Show-AllPages</Link>
                    </li>
                </ul>
            </nav>
            </header>
        )
    }

     export default Main_Navigation
