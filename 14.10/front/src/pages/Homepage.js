import { Box, Typography, Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Homepage() {
    const navigate = useNavigate()
    const handleClick = (e) => {
        navigate(`/${e.target.name}`)
    }
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
            >
                <Typography>Hello World!</Typography>
                <Button
                    name="login"
                    variant="outlined"
                    onClick={(e) => handleClick(e)}
                    sx={{marginTop: "1%"}}
                >
                    Login
                </Button>
                <Button
                    name="signup"
                    variant="outlined"
                    onClick={(e) => handleClick(e)}
                    sx={{marginTop: "1%"}}
                >
                    Signup
                </Button>
            </Box>
        </>
    )
}
