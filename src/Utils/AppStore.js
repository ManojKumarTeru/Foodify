import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

//This is Store
const AppStore=configureStore({
    //In Store we should keep Slices
    reducer:{
        cart: cartReducer,
    }


})

export default AppStore;