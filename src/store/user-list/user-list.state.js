import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersList } from "./user-list.logic";

const initialState = {
    data: [],
    isLoading: false,
    error: ""
};

export const slice = createSlice({
    name: "users-list",
    initialState,
    reducers: {
        reset: (state) => {
            state.users = [];
            state.isLoading = false
            state.error = ""
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersList.pending, (state) => {
            state.isLoading = true
            state.error = ""
        })
        builder.addCase(fetchUsersList.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
            state.error = ""
        })
        builder.addCase(fetchUsersList.rejected, (state, error) => {
            state.isLoading = false
            state.error = "An Error Occured"
        })
    }
});

// Action creators are generated for each case reducer function
export const usersListReducer = slice.reducer
export const usersListActions = slice.actions
