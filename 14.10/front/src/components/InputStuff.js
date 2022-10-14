import { createTheme, TextField, ThemeProvider } from "@mui/material"
import React, { useState } from "react"

export default function InputStuff() {
    const [text, setText] = useState("")
    const handleChange = e => {
        setText(e.target.value)
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffffff"
            }
        }
    })

    return (
        <>
            <p>{text ? text : "Kirjuta midagi!"}</p>
            <ThemeProvider theme={theme}>
                <TextField
                    variant="filled"
                    style={{ backgroundColor: "#12378c" }}
                    value={text}
                    onChange={e => handleChange(e)}
                />
            </ThemeProvider>
        </>
    )
}
