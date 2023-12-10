import API from "../../api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_ENDPOINTS } from "../../constants/api"

export const fetchUsersList = createAsyncThunk('users-list/fetchUsersList', async ({page}, {rejectWithValue}) => {
    try{
        const response = await API.get({url: API_ENDPOINTS.fetchUsers, params: {page: page}})
        return response.data
    }catch(error){
        return rejectWithValue(error.response.data)
    }
})