import * as React from 'react'
import {FunctionComponent, useCallback, useState} from "react";
import {Post} from "./posts/post";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/roots/Roots";
import {useEffect} from "react";
import {postAction} from "./redux/actions/postsActions";
import styles from './RootStyles.module.scss'
import {Select} from "./elements/inputList/select";
import {Posts} from "./types/interfaces";

export const Root:FunctionComponent=()=>{
    const posts=useSelector((state:RootState)=>state.posts)
    const dispatch=useDispatch()
       useEffect(()=>{
           dispatch(postAction.fetchAllPosts.request())
       },[dispatch])

    const [search,setSearch]=useState(false)
    return(
        <div className={styles.container}>
       <Select<Posts> data={posts.filter(item=>item.title.includes('esse'))} render={item => item.title} handleClick={()=>setSearch(true)} itemToKey={key => key.id}/>
            {posts.map(post=>
                <Post data={post}/>
            )}
        </div>
    )
}
