export const BASE_URL = "https://reqres.in/api"

export const API_ENDPOINTS = {
    fetchUsers: BASE_URL + `/users`,
    fetchUser: (id) => BASE_URL + `/${id}`
}