import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:"language",
    initialState:{language:"en"},
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
});

export default LanguageSlice.reducer;
export const {changeLanguage}=LanguageSlice.actions;