import { combineReducers } from "redux";
import {postReducer} from "../reducers/postsReducers";
import {StateType} from "typesafe-actions";
import {combineEpics} from "redux-observable";
import {fetchPostsEpic} from "../epics/postsEpics";

export const RootReducer=combineReducers({
    posts:postReducer
})

export type RootState=StateType<typeof RootReducer>


export const RootEpics=combineEpics(
    fetchPostsEpic
)

