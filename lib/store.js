import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './features/sidebar/sidebarSlice'
import historyReducer from './features/history/historySlice'
import codeReducer from './features/code/codeSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    history:historyReducer,
    code:codeReducer,
    // Add other reducers here if needed
  },
});