import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Divider, FormControl, TextField, FormHelperText, Typography } from "@mui/material"
import axios from "axios"

export default function Signup() {
    const form = {
        username: "",
        email: "",
        password: "",
        confirmPwd: ""
    }
    const [formValue, setFormValue] = useState(form)
    const [helperText, setHelperText] = useState("")
    const [success, setSuccess] = useState(false)

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
        if(formValue.password === formValue.confirmPwd){
            setHelperText("")
            axios.post("http://localhost:8080/signup", {
                username: formValue.username,
                email: formValue.email,
                password: formValue.password
            })
            .then(function(response) {
                console.log(response)
                setSuccess(true)
            })
            .catch(function(error) {
                if(error.response){
                    console.log(error.response)
                    setHelperText(error.response.data.errors[0].msg)
                } else if (error.request){
                    console.log(error.request)
                } else {
                    console.log(error.message)
                }
            }) 
        } else {
            setHelperText("Passwords don't match!")
        }
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
                <Divider>Signup</Divider>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    {success && <Typography>User created!</Typography>}
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
                        <FormHelperText>Password must be min. 5 characters</FormHelperText>
                        <TextField
                            value={formValue.confirmPwd}
                            onChange={e => handleFormChange(e)}
                            required
                            id="confirmPwd"
                            name="confirmPwd"
                            label="Confirm Password"
                            autoComplete="none"
                            type="password"
                            margin="dense"
                        />
                        <FormHelperText error>
                            {helperText}
                        </FormHelperText>
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            margin="normal"
                        >
                            Create user
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}
