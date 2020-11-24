import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";

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
                    <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    term={this.state.term}
                    ></Form>
            </div>
        )
    }
}

export default Books;