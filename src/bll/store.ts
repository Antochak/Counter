import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../localStorage-utils/localStorageUtils";

const rootReducer = combineReducers({
    counter: counterReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(()=> {
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem('startValue', JSON.stringify( store.getState().counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify( store.getState().counter.maxValue))
    localStorage.setItem('app-state', JSON.stringify( store.getState()))
})
