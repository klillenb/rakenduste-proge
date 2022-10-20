import React, { useState, useRef, useEffect, useContext } from "react"
import { Box, Button, Divider, FormControl, TextField } from "@mui/material"
import axios from "axios"

export default function Login() {
    const form = {
        username: "",
        email: "",
        password: ""
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
        console.log(formValue)
        axios.post("http://localhost:8080/login", formValue)
        .then(function(response) {
            console.log(response)
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
                minHeight="100vh"
            >
                <Divider>Login</Divider>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <FormControl>
                        <TextField
                            value={formValue.username}
                            onChange={e => handleFormChange(e)}
                            required
                            id="username"
                            name="username"
                            label="Username"
                            autoComplete="none"
                            type="text"
                            margin="dense"
                        />
                        <TextField
                            value={formValue.email}
                            onChange={e => handleFormChange(e)}
                            required
                            id="email"
                            name="email"
                            label="Email"
                            autoComplete="none"
                            type="text"
                            margin="dense"
                        />
                        <TextField
                            value={formValue.password}
                            onChange={e => handleFormChange(e)}
                            required
                            id="password"
                            name="password"
                            label="Password"
                            autoComplete="none"
                            type="password"
                            margin="dense"
                        />
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            margin="normal"
                        >
                            Login
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}
