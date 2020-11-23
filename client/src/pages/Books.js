import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

class Books extends Component {
    state = {
        search: "",
        results: [],
        message: "Search for a book!"
    };

    render() {
        return (
            <div>
                <Nav />
                <Jumbotron />
            </div>
        )
    }
}

export default Books;