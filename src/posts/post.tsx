import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {Posts} from "../types/interfaces";
import styles from './postsStyles.module.scss'
export interface Props{
    data:Posts
}

export const Post:FunctionComponent<Props>=(props)=>{
    const [full,setFull]=useState(false)
    return(
        <div key={props.data.id} className={styles.container}>
                <div className={styles.title}>{props.data.title}</div>
                <a onClick={()=>setFull(!full)} className={styles.open}>{full?"close":"more"}</a>
            <div style={full?{display:"block"}:{display:"none"}} >{props.data.body}</div>
        </div>
    )
}
