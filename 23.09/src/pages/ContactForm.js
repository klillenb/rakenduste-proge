import React, { useState } from "react"
import { Box, Button, Divider, FormControl, TextField } from "@mui/material"

export default function ContactForm() {
    const form = {
        name: "",
        email: "",
        reason: ""
    }
    const [formValue, setFormValue] = useState(form)
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
        return alert(`Hi ${formValue.name}, there is no backend lol`)
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
                <Divider>Contact Form - feel free to write!</Divider>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <FormControl>
                        <TextField
                            value={formValue.name}
                            onChange={e => handleFormChange(e)}
                            required
                            id="name"
                            name="name"
                            label="Full name"
                            autoComplete="none"
                            type="text"
                            margin="dense"
                        />
                        <TextField
                            value={formValue.email}
                            onChange={e => handleFormChange(e)}
                            id="email"
                            name="email"
                            label="Email"
                            autoComplete="none"
                            type="text"
                            margin="dense"
                        />
                        <TextField
                            value={formValue.reason}
                            onChange={e => handleFormChange(e)}
                            id="reason"
                            name="reason"
                            label="Reason for writing"
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
