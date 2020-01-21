import * as  React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import {RootEpics, RootReducer, RootState} from "./redux/roots/Roots";
import {createEpicMiddleware} from "redux-observable";
import {useEffect} from "react";

import {Post} from "./posts/post";
import {Provider, useSelector} from "react-redux";
import {Root} from "./Root";


export const epicMiddleware=createEpicMiddleware()
export  function configureStore(){
    const store=createStore(RootReducer,applyMiddleware(epicMiddleware))

    epicMiddleware.run(RootEpics)
    return store
}


const App: React.FC = () => {

  return (
      <Provider store={configureStore()}>
    <div className="App">
        App
        <Root/>
    </div>
      </Provider>
  );
}

export default App;
