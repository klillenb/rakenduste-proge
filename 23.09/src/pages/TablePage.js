import React from "react"
import { Box, Typography } from "@mui/material"
import CustomTable from "../components/CustomTable"

export default function TablePage() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            margin="2%"
        >
            <Typography>Table from MUI documentation</Typography>
            <CustomTable />
        </Box>
    )
}
