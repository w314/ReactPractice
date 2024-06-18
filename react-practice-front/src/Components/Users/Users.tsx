import React from 'react';
import './Users.css';
import axios, { AxiosResponse, AxiosError } from "axios";



type userType = {
    id: number,
    email: string,
    name: string,
    phone: string
}


const Users: React.FC<{}> = () => {


    const [ users, setUsers ] = React.useState([] as userType[])

    React.useEffect(() => {

        const getUsers = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users'
            try {
                const response = await axios(url)
                setUsers(response.data)
            } catch(error) {
                console.error(`Error getting user deatils: `, error)
                
            }
        }

        getUsers();

    }, [])

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user => (
                    <tr key={user.id}>
                        <td className="id">{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        </>
    )
}

export default Users