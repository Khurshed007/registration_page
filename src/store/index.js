import { configureStore } from "@reduxjs/toolkit";
import bewertung from "./bewertung";
import shopSlice from "./shop-slice"
export const store = configureStore({
    reducer : {
        shop : shopSlice,
         bewertung : bewertung
    }
})