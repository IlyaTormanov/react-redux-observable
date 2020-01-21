import * as React from 'react'
import {FunctionComponent, ReactNode} from "react";


export interface ListProps<T>{
    render:ReactNode,
    handleClick:()=>void,
    itemToKey:number
}

export function List<T>(props:ListProps<T>){
    return(
        <div onClick={()=>props.handleClick} key={props.itemToKey}>
            {props.render}
        </div>
    )
}
