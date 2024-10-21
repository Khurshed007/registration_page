import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoading: false,
  auth: null,
  theme: "light",
  isError: null,
  discountApplied: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setAuth : (state, {payload}) => {
         state.auth = payload;
        if(state.auth) state.discountApplied = true;
    }
  },
 
});

export const {
  setIsLoading,
  switchTheme,
  toggleLikes,
  setAuth,
  discountApplied,
  orderApplied,
} = shopSlice.actions;
export default shopSlice.reducer;
