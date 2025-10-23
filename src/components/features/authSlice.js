import { createSlice } from "@reduxjs/toolkit";

const initialForm = {
    email: "",
    phone: "",
    password: "",
    remember: false,
};

const persistedCurrent = JSON.parse(localStorage.getItem("currentUser") || "null");

const initialState = {
    form: initialForm,
    currentUser: persistedCurrent,
    country: "Eng",
    showPassword: false,
    loginMethod: "phone",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setField(state, action) {
            const { field, value } = action.payload;

            if (field in state.form) {
                state.form[field] = value;
            } else {
                state[field] = value;
            }
        },
        resetForm(state) {
            state.form = { ...initialForm };
            state.country = "Eng";
            state.showPassword = false;
            state.loginMethod = "phone";
        },
        loginSuccess(state, action) {
            state.currentUser = action.payload;
        },
        logout(state) {
            state.currentUser = null;
            localStorage.removeItem("currentUser");
            sessionStorage.removeItem("currentUser");
        },
    },
});

export const { setField, resetForm, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
