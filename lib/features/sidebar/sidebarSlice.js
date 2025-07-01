import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  preview:false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebar: (state,action) => {
      state.value = action.payload
    },
    setPreview:(state,action)=>{
      state.preview=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSidebar,setPreview } = sidebarSlice.actions

export default sidebarSlice.reducer