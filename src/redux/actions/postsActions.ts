import {ActionType, createAsyncAction} from "typesafe-actions";
import {Posts} from "../../types/interfaces";

export const postAction={
    fetchAllPosts:createAsyncAction(
        "FETCH_ALL_POST_REQUEST",
        "FETCH_ALL_POSTS_SUCCESS",
        "FETCH_ALL_POSTS_FAILURE"
    )<undefined,Posts[],null>()
}


export type postType=ActionType<typeof postAction>
