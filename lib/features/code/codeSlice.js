import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: "",   // For index.html
  style: "",   // For style.css
  script: "",  // For script.js
};

const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action) => {
      const { index, style, script } = action.payload;
      state.index = index || "";
      state.style = style || "";
      state.script = script || "";
    },
    clearCode: (state) => {
      state.index = "";
      state.style = "";
      state.script = "";
    },
  },
});

export const { setCode, clearCode } = codeSlice.actions;
export default codeSlice.reducer;
