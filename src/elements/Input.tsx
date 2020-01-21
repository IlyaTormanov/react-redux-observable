import * as React from 'react'
import {FunctionComponent} from "react";

export interface Props<T>{
    onChange:(event:string)=>void
}


export function Input<T>(props:Props<T>){
    return(
        <input onChange={(event)=>props.onChange(event.target.value)}/>
    )
}
