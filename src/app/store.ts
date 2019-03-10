
import {  TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, SEARCH_RESULTS } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
   // todos: ITodo[];
   // lastUpdate: Date;
   searchResults: Array<any>;
}

export const HOME_INITIAL_STATE: IAppState = {
  //  todos: [],
  //  lastUpdate: null
  searchResults: []
  
}

function searchResults(state, action) {
    var newState = state;
    newState.searchResults = action.searchResults
    return tassign(state, action);
}

export function rootReducer(state: IAppState = HOME_INITIAL_STATE, action): IAppState {
    
    switch (action.type) {
        case SEARCH_RESULTS: return searchResults(state, action);



    }
    return state;
}

