import { createSlice } from "@reduxjs/toolkit";

interface CounterStateType{
    count:number,
    user:string
}
const counterState:CounterStateType={
    count:0,
    user:"Divyansh"
}
export const counterSlice=createSlice({
    name:"counter",
    initialState:counterState,
    reducers:{
        inc:(state)=>{
            state.count+=1
        },
        dec:(state)=>{
            state.count-=1
        },
        incByNumber:(state, action)=>{
            state.count+=action.payload
        },
        decByNumber:(state, action)=>{
            state.count-=action.payload
        }
    }
})

export const {inc, dec, incByNumber, decByNumber}=counterSlice.actions
export default counterSlice.reducer