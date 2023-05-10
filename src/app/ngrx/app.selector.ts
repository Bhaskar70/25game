import { createFeatureSelector, createSelector } from "@ngrx/store";
export interface Data {
    registerData:any 
}
export const FeatureSelector = createFeatureSelector<Data>('data')
export const FormDataSelector = createSelector(
    FeatureSelector ,
    state=> state.registerData
)