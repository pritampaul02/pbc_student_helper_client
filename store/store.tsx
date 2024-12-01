import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/authSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
