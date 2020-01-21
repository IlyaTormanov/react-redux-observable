import {Epic, ofType} from "redux-observable";
import {postAction, postType} from "../actions/postsActions";
import {isActionOf} from "typesafe-actions";
import {catchError, filter, map, mergeMap,} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {Posts} from "../../types/interfaces";

export const fetchPostsEpic:Epic<postType,postType>=action$ => action$.pipe(
    filter(isActionOf(postAction.fetchAllPosts.request)),
    mergeMap(()=>ajax.getJSON("https://jsonplaceholder.typicode.com/posts")),
        map((res)=>postAction.fetchAllPosts.success(res as Posts[])),
    catchError(()=>of(postAction.fetchAllPosts.failure(null)))
)
