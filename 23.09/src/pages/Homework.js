import React from "react"
import Calculator from "../components/Calculator"
import InputStuff from "../components/InputStuff"

export default function Homework() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello Homework!</p>
                <div>
                    <Calculator />
                    <InputStuff />
                </div>
            </header>
        </div>
    )
}
