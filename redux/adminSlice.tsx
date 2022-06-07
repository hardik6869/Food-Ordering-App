import {createSlice} from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: false as boolean,
    reducers: {
        logout: (state, action) => {
            localStorage.clear();
            return action.payload;
        },
        login: (state, action) => {
            return action.payload;
        },
    },
});

export const {login, logout} = adminSlice.actions;
export default adminSlice.reducer;
