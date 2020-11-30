import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Axios from "axios";

class Books extends Component {
    state = {
        search: "",
        results: [],
        message: "Search for a book!"
    };

    handleInputChange() {
        const book = {
            name: "x",
            author: "y"
        }
        API.postBook(book)
            .then((res)=>{

            })
            .catch()

        
    }

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