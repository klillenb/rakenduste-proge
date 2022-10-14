import React, { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homework from "./pages/Homework"
import NotFound from "./components/NotFound"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import TablePage from "./pages/TablePage"
import Todo from "./pages/Todo"
import UserProfile from "./pages/UserProfile"
import Users from "./pages/Users"
import Login from "./components/Login"
import "./style/App.css"

const UserContext = createContext()

export default function App() {
    const [currentUser, setCurrentUser] = useState()

    return (
        <BrowserRouter>
            <UserContext.Provider value={[currentUser, setCurrentUser]}>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Homepage />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                    <Route
                        path="/homework"
                        element={<Homework />}
                    />
                    <Route
                        path="/table-page"
                        element={<TablePage />}
                    />
                    <Route
                        path="/todo"
                        element={<Todo />}
                    />
                    <Route
                        path="/user-profile"
                        element={<UserProfile />}
                    />
                    <Route
                        path="/users"
                        element={<Users />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
