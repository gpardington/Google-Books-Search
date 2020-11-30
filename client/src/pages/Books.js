import React, { Component } from "react";
import API from "../utils/API"
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Books extends Component {
    state = {
        search: "",
        result: {},
        results: [],
        image:"",
        message: "Search for a book!"
    };

//Function that runs search of API based on user's input
    searchBooks = (query) => {
        API.search(query)
            .then((res) => {
                //Set the array of search results to state
                this.setState({ results: res.data.items });
                //Set the first search result object to state
                this.setState({ result: res.data.items[0].volumeInfo });
                this.setState({ image: res.data.items[0].volumeInfo.imageLinks.thumbnail });
                this.setState({ search: "" });
            }).catch((error) => console.log(error));
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    handleSaveBook = (book) => {
        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors.join(", "),
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink,
          }).catch((err) => console.log(err));
        };
    
        render(){
            const searchResults = this.state.results;
            const jumbotronImage = this.state.image;

            return (
                <div className="container">
                    <Card heading="Search for a Book">
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Card>
                    <Jumbotron heading={this.state.result.title} jumbotronImage={jumbotronImage} author={this.state.result.authors}></Jumbotron>
                    <SearchResults searchResults={searchResults} handleSaveBook={this.handleSaveBook}/>
                </div>
            );
        }
}

export default Books;