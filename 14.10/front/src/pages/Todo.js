import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Divider, FormControl, TextField, Typography } from "@mui/material"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import et from 'dayjs/locale/et';
import axios from "axios";
import TodoList from "../components/TodoList";

export default function Todo() {
    const form = {
        title: "",
        date: dayjs().format("YYYY-MM-DD"),
        importance: 0
    }
    const [formValue, setFormValue] = useState(form)
    const [success, setSuccess] = useState(false)
    // const titleRef = useRef(null)
    // const dateRef = useRef(null)
    // const importanceRef = useRef(null)
    const previousInputValue = useRef(null)

    useEffect(() => {
        previousInputValue.current = formValue
    }, [formValue])

    const handleFormChange = e => {
        const { value, name } = e.target
        const newValue = {
            ...formValue,
            [name]: value
        }
        setFormValue(newValue)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(previousInputValue.current)
        // return alert(`Hi, there is no connection to backend lol`)
        axios.post("http://localhost:8080/todo/new", {
            title: formValue.title,
            date: formValue.date,
            importance: parseInt(formValue.importance)
        })
            .then(function(response) {
                console.log(response)
                setSuccess(true)
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

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Divider>Add To-Do</Divider>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <FormControl>
                        <TextField
                            value={formValue.title}
                            inputRef={previousInputValue.title}
                            onChange={e => handleFormChange(e)}
                            required
                            id="title"
                            name="title"
                            label="Title"
                            autoComplete="none"
                            type="text"
                            margin="dense"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={et}>
                            <DatePicker
                                id="date"
                                name="date"
                                label="Date"
                                invalidDateMessage="Date error"
                                inputFormat="DD.MM.YYYY"
                                mask="__.__.____"
                                value={formValue.date}
                                inputRef={previousInputValue.date}
                                onChange={value => setFormValue({...formValue, date: dayjs(value).format("YYYY-MM-DD")})}
                                renderInput={(params) => <TextField {...params} />}
                                />
						</LocalizationProvider>
                        <TextField
                            value={formValue.importance}
                            inputRef={previousInputValue.importance}
                            onChange={e => handleFormChange(e)}
                            id="importance"
                            name="importance"
                            label="Importance"
                            autoComplete="none"
                            type="number"
                            margin="dense"
                            />
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            margin="normal"
                            >
                            Submit
                        </Button>
                        {success && <Typography>To-do created!</Typography>}
                    </FormControl>
                    <Divider>TO-DO's</Divider>
                    <TodoList />
                </Box>
            </Box>
        </>
    )
}
