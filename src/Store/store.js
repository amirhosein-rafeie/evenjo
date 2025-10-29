import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/features/usersSlice";
import authReducer from "../components/features/authSlice";
import popupReducer from "../components/features/popupSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    popup: popupReducer,
  },
});

export default store;