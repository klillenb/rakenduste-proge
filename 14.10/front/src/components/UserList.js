import React, { useState } from "react"
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    IconButton,
    ListItemButton
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function UserList(props) {
    const { username, name, email, id, removeUser } = props
    const [todo, setTodo] = useState([])
    async function fetchTodo(id) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}/todos`
        )
        const todos = await response.json()
        return setTodo(todos)
    }
    async function deleteUser(id) {
        console.log(id)
        const toDelete = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "DELETE"
            }
        )
        await console.log(toDelete.json())
        return removeUser(id)
    }
    const handleClick = id => {
        // TODO: show todos
        fetchTodo(id)
    }
    const handleDelete = id => {
        deleteUser(id)
    }
    return (
        <>
            <ListItem
                key={id}
                alignItems="flex-start"
                secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemButton
                    role={undefined}
                    onClick={() => handleClick(id)}
                    dense
                >
                    <ListItemAvatar>
                        <Avatar
                            alt="user picture"
                            src="../../public/logo512.png"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {` — ${username}, ${email}`}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider
                variant="inset"
                component="li"
            />
        </>
    )
}
