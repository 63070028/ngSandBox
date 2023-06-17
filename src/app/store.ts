import { createAction, createReducer, on, props } from "@ngrx/store";


//state
const state = {
    count:0
}
 
const userState = {
    name:"deful",
    role:"deful"
}

//action
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const changeName = createAction('Change Name', props<{name:string}>())
export const changeRole = createAction('Change Role', props<{role:string}>())


//reducer
export const counterReducer = createReducer(
    state,
    on(increment, (state) => {return {...state, count:state.count+1}}),
    on(decrement, (state) => {return {...state, count:state.count-1}}),
    on(reset, (state) => {return {...state, count:0}}),
  );

export const UserReducer = createReducer(
    userState,
    on(changeName, (state, {name}) => {return {...state, name:name}}),
    on(changeRole, (state, {role}) => {return {...state, role:role}}),
)
