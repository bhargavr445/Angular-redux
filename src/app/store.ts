
import {  TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, SEARCH_RESULTS, PAGE_LOAD } from './actions';
import { tassign } from 'tassign';
import {LandingAppState, LANDING_INITIAL_STATE, landingReducer} from './home/store'
import { combineReducers } from 'redux';
import { AppLandingPage, APPLANDING_INITIAL_STATE, ApplandingReducer } from '../app/landing/store';
//this is for the feature module 
export interface AppState {
   landing: LandingAppState;
   appLanding: AppLandingPage
  //  load_page: boolean;
  //  appSearchResults: Array<any>;

}

//eager loaded module store configs
// export interface myAppState {
 
// }
// export const MyApp_INITIAL_STATE: myAppState = {
  

  
// }
export const INITIAL_STATE: AppState = {

  landing: LANDING_INITIAL_STATE,
  appLanding: APPLANDING_INITIAL_STATE
  // load_page: false,
  // appSearchResults: [],
  
}

// function searchResults(state:AppState, action) {
//     var newState = state;
//     newState.searchResults = action.searchResults
//     return tassign(state, action);
// }

// function pageLoad(state: AppState, action) {
//   var newState = state;
  
//     newState.load_page = action.load_page;
//     console.log(newState.load_page);
//     return tassign(state, action);
// }

// export function appReducer(state: AppState = INITIAL_STATE, action): AppState {
    
//     switch (action.type) {
//         //case SEARCH_RESULTS: return searchResults(state, action);
//         case PAGE_LOAD : return pageLoad(state, action);
//     }

//     return state;
// }


export const rootReducer = combineReducers({
  //  appReducers: appReducer,
    landing: landingReducer,
    appLanding: ApplandingReducer
})
