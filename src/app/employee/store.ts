
import { tassign } from 'tassign';
import { FILTER_FORM } from '../actions';

export interface EmployeeAppState {
    formObj: any;
}

export const EMPLOYEE_INITIAL_STATE:  EmployeeAppState = {
    formObj: [],
    
}

function empFilter(state: EmployeeAppState, action){
    debugger;
    var newState = state;
    newState.formObj = action.formObj
    return tassign(state, newState);
}


// function loadAllStates(state: EmployeeAppState, action){
//     var newState = state;
//     newState.allStates = action.allStates
//     return tassign(state, newState);
// }
 export function EmployeeReducer(state: EmployeeAppState = EMPLOYEE_INITIAL_STATE, action): EmployeeAppState {
    switch(action.type){
         case FILTER_FORM: return empFilter(state, action);
         //case GET_ALL_STATES : return loadAllStates(state, action);
     }
     return state;
 }