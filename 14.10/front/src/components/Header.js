import { AppBar, Box, Toolbar, MenuItem, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const pages = [
        "homepage",
        "homework",
        "MUI table",
        "todo",
        "users",
        "user profile"
    ]
    const navigate = useNavigate()
    const handleRoute = e => {
        switch (e.target.textContent) {
            case "homepage":
                return navigate("/")
            case "homework":
                return navigate("/homework")
            case "MUI table":
                return navigate("/table-page")
            case "todo":
                return navigate("/todo")
            case "users":
                return navigate("/users")
            case "user profile":
                return navigate("/user-profile")
            default:
                return navigate("/")
        }
    }

    return (
        <AppBar position="absolute">
            <Toolbar disableGutters>
                <Box sx={{ display: "flex" }}>
                    {pages.map(page => (
                        <MenuItem
                            key={page}
                            onClick={e => handleRoute(e)}
                        >
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
