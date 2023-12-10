import axios from "axios"

export const Request = {
    GET: "get",
    POST: "post",
    MULTIPART: "multipart"
}
export const API = {
    get: async ({url, params}) => {
        return API.request({url, type: "get", params})
    },
    post: async ({url, body}) => {
        return API.request({url, type: "post", body})
    },
    multipart: async ({url, body}) => {
        return API.request({url, type: "multipart", body})
    },
    request: async({url, type, params, body}) => {
        try{
            if(type === "multipart"){
                const response = await axios.post(url, body, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                return response
            }else if(type === "post"){
                const response = await axios.post(url, body)
                return response
            }else{
                const response = await axios.get(url, {params: params, timeout: 180000})
                return response
            }
        }catch(error){
            console.log(error.response)
            throw error
        }
    }
}

export default API