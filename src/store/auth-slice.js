import { createSlice } from '@reduxjs/toolkit';

const defaultAuthState = { authenticated: false }

const authSlice = createSlice({
    name: 'Authentication',
    initialState: defaultAuthState,
    reducers: {
        logIn(state) {
            state.authenticated = true;
        },
        logOut(state) {
            state.authenticated = false;
        }
    }
});

export default authSlice;
export const authActions = authSlice.actions;