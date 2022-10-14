import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Divider, FormControl, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import et from 'dayjs/locale/et';

export default function Todo() {
    const form = {
        title: "",
        date: `${dayjs().get('year')}-${(dayjs().get('month') + 1) < 10 ? "0".concat(dayjs().get('month') + 1) : (dayjs().get('month') + 1)}-${dayjs().get('date') < 10 ? "0".concat(dayjs().get('date')): dayjs().get('date')}`,
        importance: ""
    }
    const [formValue, setFormValue] = useState(form)
    const titleRef = useRef(null)
    const dateRef = useRef(null)
    const importanceRef = useRef(null)

    // useEffect(() => {
    //     previousInputValue.current = formValue
    // }, [formValue])

    const handleFormChange = e => {
        const { value, name } = e.target
        console.log(e.target)
        if(name === "date"){
            value = `${e.$y}-${e.$M + 1 < 10 ? "0".concat(e.$M + 1) : e.$M + 1}-${e.$D < 10 ? "0".concat(e.$D) : e.$D}`
        }
        const newValue = {
            ...formValue,
            [name]: value
        }
        setFormValue(newValue)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log({
            titleRef: titleRef,
            dateRef: dateRef,
            importanceRef: importanceRef
        })
        return alert(`Hi, there is no connection to backend lol`)
    }

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
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
                            inputRef={titleRef}
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
                                value={formValue.date}
                                inputRef={dateRef}
                                onChange={e => handleFormChange(e)}
                                renderInput={(params) => <TextField {...params} />}
                            />
						</LocalizationProvider>
                        <TextField
                            value={formValue.importance}
                            inputRef={importanceRef}
                            onChange={e => handleFormChange(e)}
                            id="importance"
                            name="importance"
                            label="Importance"
                            autoComplete="none"
                            type="text"
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
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}
