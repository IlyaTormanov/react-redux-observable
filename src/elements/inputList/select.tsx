import * as React from 'react'
import {FunctionComponent, ReactNode, useState} from "react";
import {Input} from "../Input";
import {List} from "./list";


export interface SelectProps<T>{
data:T[]
    render:(item:T)=>ReactNode,
    handleClick:(i:T)=>void,
    itemToKey:(key:T)=>number
}


export function Select<T>(props:SelectProps<T>){
    const [change,setChange]=useState("")
    return(
        <div>
            <Input onChange={event => setChange(event)}/>
            {props.data.map(item=>
                <List<T> render={()=>props.render(item)} handleClick={()=>props.handleClick} itemToKey={props.itemToKey(item)}/>
            )}



        </div>
    )
}
