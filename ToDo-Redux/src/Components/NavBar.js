import React from 'react'
import { Navbar } from "react-bootstrap";

function NavBar({ setLogin, login }) {
    return (
        <Navbar  >
            <Navbar.Brand style={{ color: "white" }} href="#home">Welcome</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end text-white">
                {(!login) ? <div style={{ marginRight: "10px" }}>
                    <input type="radio" id="Instructor" name="role" value="Instructor" onChange={(e) => setLogin(e.target.value)} />
                    <label for="Instructor">Instructor</label>
                    <input type="radio" id="Student" name="role" value="Student" onChange={(e) => setLogin(e.target.value)} />
                    <label for="Student">Student</label> </div> :
                    <Navbar.Text style={{ color: "white" }}>
                        Signed in as: {login}
                    </Navbar.Text>}
                <button className="btn btn-danger mx-2" onClick={() => setLogin("")}>{!login ? "login" : "Log-Out"}</button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
