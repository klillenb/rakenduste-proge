import React from "react"
import { useEffect, useState } from "react"
import UserList from "../components/UserList"
import { Box, List } from "@mui/material"

export default function UserProfile() {
    const [users, setUsers] = useState([])
    async function fetchUsers() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        const data = await response.json()
        return setUsers(data)
    }
    const removeUser = id => {
        setUsers(current =>
            current.filter(user => {
                return user.id !== id
            })
        )
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper"
                }}
            >
                {users.map(user => {
                    return (
                        <UserList
                            id={user.id}
                            username={user.username}
                            name={user.name}
                            email={user.email}
                            removeUser={removeUser}
                        />
                    )
                })}
            </List>
        </Box>
    )
}
