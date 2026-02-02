import {useEffect, useState} from "react";
import axios from "axios";

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    city: string,
}

type UserStateType = {
    users: UserType[],
    errorMsg: string,
}

type ApiUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
        [key: string]: unknown;
    }
    [key: string]: unknown;
};

async function fetchUsers(url: string): Promise<UserType[]> {
    try {
        const response = await axios.get<ApiUser[]>(url);
        return response.data.map((user: ApiUser) => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                city: user.address.city,
            };
        });
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function UserList() {
    const [userState, setUserState] = useState<UserStateType>({
        users: [],
        errorMsg: '',
    });

    const { users } = userState;

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        async function load() {
            const data = await fetchUsers(url);
            setUserState((prev) => ({ ...prev, users: data }));
        }
        load()
    }, []);

    return (
        <>
        {users.length > 0 ? (
            <>
                {users.map((user) => (
                    <div key={user.id}>
                        <p><b>ID: </b>{user.id}</p>
                        <p><b>Name: </b>{user.name}</p>
                        <p><b>Username: </b>{user.username}</p>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>City: </b>{user.city}</p>
                    </div>
                ))}
            </>
            ) : (
                <h1>LOADING....</h1>
        )}
        </>
    )
}