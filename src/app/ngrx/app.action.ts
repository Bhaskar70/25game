import { createAction, props } from "@ngrx/store";


export const formData = createAction('[Register Compoent] , on submit', props<{registerData:any}>())
