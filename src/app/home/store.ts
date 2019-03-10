
import { LANDING_SEARCH_RESULTS } from '../actions';
import { tassign } from 'tassign';
export interface LandingAppState {
    searchResults: Array<any>;
}

export const LANDING_INITIAL_STATE:  LandingAppState = {
    searchResults: []
}

function landingSearchResults(state: LandingAppState, action){
    var newState = state;
    newState.searchResults = action.searchResults
    return tassign(state, newState);
}
 export function landingReducer(state: LandingAppState = LANDING_INITIAL_STATE, action): LandingAppState {
     switch(action.type){
         case LANDING_SEARCH_RESULTS: return landingSearchResults(state, action);
     }
     
     return state;
 }