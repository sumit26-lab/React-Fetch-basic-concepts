import React from 'react'
import Main_Navigation   from '../Lyout_Link/Main_Navigation'
import classs from './Layout.module.css'

export const Layout = (props) => {
    return (
        <div>
            <Main_Navigation/>
            <main className={classs.main}>
            {props.children}
            </main>
        </div>
    )
}
