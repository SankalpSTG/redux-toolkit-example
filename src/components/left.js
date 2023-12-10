import { Link } from "react-router-dom"
import { useGetUsersQuery } from "../services/users"
export const LeftComponent = function () {
    const { data, isLoading, error } = useGetUsersQuery(1)
    console.log(data)
    return <div className="">
        <div className="tw-shadow-sm tw-p-2">
            {data && data.data.map((user) => <div className="tw-py-2">
                <Link to={`/${user.id}`}>
                    <div className="tw-min-h-[60px] tw-shadow-md tw-p-2 tw-flex tw-items-center tw-justify-start tw-gap-2">
                        <div><img className="tw-w-10" src={user.avatar} /></div><div><div className="tw-text-sm tw-leading-tight tw-text-blue-600">Email</div><div className="tw-text-lg tw-leading-tight">{user.email}</div></div>
                    </div>
                </Link>
            </div>)}
        </div>
    </div>
}