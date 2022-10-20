import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete"
import axios from "axios";
import dayjs from "dayjs";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const fetchTodo = () => {
        axios.get("http://localhost:8080/todo/")
            .then(function(response) {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch(function(error) {
                if(error.response){
                    console.log(error.response)
                } else if (error.request){
                    console.log(error.request)
                } else {
                    console.log(error.message)
                }
            })
    }
    
    // bad example, should use id
    const handleDelete = title => {
        console.log(title)
        axios.delete("http://localhost:8080/todo/delete", {
            data: { title: title }
        })
            .then(function(response) {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch(function(error) {
                if(error.response){
                    console.log(error.response)
                } else if (error.request){
                    console.log(error.request)
                } else {
                    console.log(error.message)
                }
            })
    }

    useEffect(() => {
        fetchTodo()
    }, [])
    return (
        <>
            {todos.map(todo => {
                return(
                    <ListItem
                        key={todo.id}
                        alignItems="flex-start"
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDelete(todo.title)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={todo.title}
                            secondary={
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary" 
                                >
                                    {`${dayjs(todo.date).format("DD.MM.YYYY")}`}
                                    <br />
                                    {`Importance: ${todo.importance}`}
                                </Typography>
                            }    
                        >

                        </ListItemText>
                    </ListItem>
                )
            })}
        </>
    )
}