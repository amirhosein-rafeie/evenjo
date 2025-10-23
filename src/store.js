// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/features/usersSlice";
import authReducer from "./components/features/authSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
});

export default store;