import { createReducer, on } from "@ngrx/store"
import { formData } from "./app.action"


export const initialState = {
    registerData: {}
}

export const Reducer = createReducer(
    initialState ,
    on(formData,(state , action)=> ({...state, registerData: action.registerData}))
)
export function AppReducer(state :any , action:any){
    return Reducer(state , action)
}