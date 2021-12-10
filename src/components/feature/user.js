import { createSlice } from "@reduxjs/toolkit"

 export const userSlice = createSlice({
    name: "user",
     initialState: { value: { name: "", surname: "", position: "", jobName: 'dfguyhg', salary: "", location: "", option: "" } },
   
    reducers: {
        register: (state, action) => {
            state.value = action.payload;
 
        }
        


    }
    

 })

 export const {register}= userSlice.actions
export default userSlice.reducer 