import { Box, Typography, Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Homepage() {
    const navigate = useNavigate()
    const handleClick = (e) => {
        navigate("/login")
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
                <Button variant="outlined" onClick={(e) => handleClick(e)}>Login</Button>
            </Box>
        </>
    )
}
