import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => `/?page=${page}`,
    }),
    getUser: builder.query({
      query: (userId) => `/${userId}`,
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUserQuery } = usersApi