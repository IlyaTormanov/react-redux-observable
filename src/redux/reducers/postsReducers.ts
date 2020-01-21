import {createReducer, StateType} from "typesafe-actions";
import {postAction, postType} from "../actions/postsActions";
import {Posts} from "../../types/interfaces";

export const postReducer=createReducer<Posts[],postType>([])
.handleAction(postAction.fetchAllPosts.success,(state,action)=>action.payload)


export type postReducerType=StateType<typeof postReducer>
