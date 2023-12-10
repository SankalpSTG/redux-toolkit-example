import { Link, useParams } from "react-router-dom"
import { useGetUsersQuery, useLazyGetUserQuery } from "../services/users"
import { useEffect } from "react"
export const BottomComponent = function () {
    const {id} = useParams()
    const [getUserQuery, result] = useLazyGetUserQuery()
    useEffect(() => {
        if (id) {
            getUser(id)
        }
    }, [id])
    const getUser = async(id) => {
        getUserQuery(id)
    }
    console.log(result)
    return <div className="">
        <div className="tw-shadow-sm tw-p-2">
            {result.isLoading && <>Loading...</>}
            {result.data && <div>
                <div><img src={ result.data.data.avatar}/></div>
                <div>Name: {result.data.data.first_name} {result.data.data.last_name}</div>
                <div>email: {result.data.data.email}</div>
            </div>}
        </div>
    </div>
}