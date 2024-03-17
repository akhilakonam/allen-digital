import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers/loader.reducer";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export default store;