import { createSlice } from "@reduxjs/toolkit";

const persisted = (() => {
    try {
        return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
        return [];
    }
})();

const usersSlice = createSlice({
    name: "users",
    initialState: {
        list: persisted,
    },
    reducers: {
        registerUser(state, action) {
            const newUser = action.payload;
            const exists = state.list.some(
                (u) =>
                    (newUser.email && u.email === newUser.email) ||
                    (newUser.phone && u.phone === newUser.phone)
            );
            if (!exists) {
                state.list.push(newUser);
                localStorage.setItem("users", JSON.stringify(state.list));
            }
        },
        setUsers(state, action) {
            state.list = action.payload || [];
            localStorage.setItem("users", JSON.stringify(state.list));
        },
    },
});

export const { registerUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
