import { createSlice, configureStore } from '@reduxjs/toolkit';

const defaultState = { count: 0, showCount: true };

// If you return in reducer slice a new value then state will be overwritten by Immer
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increament: (state, action) => {
//             return { ...state, count: state.count + action.payload };
//         },
//         decreament:  (state, action) => {
//             return { ...state, count: state.count - action.payload };
//         },
//         toggle: (state) => {
//             return { ...state, showCount: !state.showCount}
//         }
//     }
// });

/* If you do not return reducer slice and only modify it then Immer will create a deep copy
    of the state and modify it.
    Thus overall the state(previous) is not mutated to get new state.
*/
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: defaultState,
//     reducers: {
//         increament: (state, action) => {state.count = state.count + action.payload},
//         decreament: (state, action) => {state.count = state.count + action.payload},
//         toggle: (state) => {state.showCount = !state.showCount}
//     }
// });

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increament(state, action) {
            state.count = state.count + action.payload
        },
        decreament(state, action) {
            state.count = state.count - action.payload
        },
        toggle(state) {
            state.showCount = !state.showCount;
        }
    }
});


const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;