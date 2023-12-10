import { configureStore } from '@reduxjs/toolkit'
import { usersListReducer } from './user-list/user-list.state'

export const store = configureStore({
    reducer: {
      usersList: usersListReducer,
    },
})